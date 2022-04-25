import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

function getEth() {
	// @ts-expect-error
	const eth = window.ethereum;

	if (!eth) {
		throw new Error('No eth!');
	}

	return eth;
}

async function hasAccounts() {
	const eth = getEth();
	const accounts = (await eth.request({
		method: 'eth_accounts',
	})) as string[];

	return accounts && accounts.length;
}

async function requestAccounts() {
	const eth = getEth();
	const accounts = (await eth.request({
		method: 'eth_requestAccounts',
	})) as string[];

	return accounts && accounts.length;
}

const Index = () => {
	const [message, setMessage] = useState('');
	const loadMessage = async () => {
		const contractAddress = import.meta.env.VITE_HELLO_CONTRACT_ADDRESS;
		if (
			!(await hasAccounts()) &&
			!(await requestAccounts()) &&
			contractAddress
		) {
			throw new Error('Let me take your money!');
		}

		const hello = new ethers.Contract(
			contractAddress!,
			['function hello() public pure returns (string memory)'],
			new ethers.providers.Web3Provider(getEth())
		);
		const message = await hello.hello();

		setMessage(message);

		return message;
	};

	useEffect(() => {
		loadMessage();
	}, []);

	return <p>{message}</p>;
};

export default Index;
