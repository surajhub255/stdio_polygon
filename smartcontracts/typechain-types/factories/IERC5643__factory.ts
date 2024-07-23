/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC5643, IERC5643Interface } from "../IERC5643";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "expiration",
        type: "uint64",
      },
    ],
    name: "SubscriptionUpdate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "cancelSubscription",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "expiresAt",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "isRenewable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "duration",
        type: "uint64",
      },
    ],
    name: "renewSubscription",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IERC5643__factory {
  static readonly abi = _abi;
  static createInterface(): IERC5643Interface {
    return new utils.Interface(_abi) as IERC5643Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC5643 {
    return new Contract(address, _abi, signerOrProvider) as IERC5643;
  }
}