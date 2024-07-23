/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface PhygitalInterface extends utils.Interface {
  contractName: "Phygital";
  functions: {
    "Counter()": FunctionFragment;
    "accessMasterAddress()": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "createAsset(string,uint96,bytes)": FunctionFragment;
    "delegateAssetCreation(address,string,uint96,bytes)": FunctionFragment;
    "destroyAsset(uint256)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "name()": FunctionFragment;
    "nftPrice()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "phygitalAssets(uint256)": FunctionFragment;
    "phygitalIdCheck(bytes)": FunctionFragment;
    "rentables(uint256)": FunctionFragment;
    "royaltyInfo(uint256,uint256)": FunctionFragment;
    "safeTransferFrom(address,address,uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "setItemStatus(uint256,uint8)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenByIndex(uint256)": FunctionFragment;
    "tokenOfOwnerByIndex(address,uint256)": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "tradeHub()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "version()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "Counter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "accessMasterAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "createAsset",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateAssetCreation",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "destroyAsset",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nftPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "phygitalAssets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "phygitalIdCheck",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rentables",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setItemStatus",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenByIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenOfOwnerByIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tradeHub", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "Counter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "accessMasterAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "delegateAssetCreation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "destroyAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nftPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "phygitalAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "phygitalIdCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rentables", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "royaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setItemStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenOfOwnerByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tradeHub", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "FundTransferred(address,address,uint256,uint256)": EventFragment;
    "PhygitalAssetCreated(uint256,address,string)": EventFragment;
    "PhygitalAssetDestroyed(uint256,address)": EventFragment;
    "RentalInfo(uint256,bool,uint256,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "UpdateAssetStatus(address,uint8,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FundTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PhygitalAssetCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PhygitalAssetDestroyed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RentalInfo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateAssetStatus"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; approved: string; tokenId: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  { owner: string; operator: string; approved: boolean }
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export type FundTransferredEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { sender: string; reciepient: string; tokenId: BigNumber; amount: BigNumber }
>;

export type FundTransferredEventFilter = TypedEventFilter<FundTransferredEvent>;

export type PhygitalAssetCreatedEvent = TypedEvent<
  [BigNumber, string, string],
  { tokenID: BigNumber; creator: string; metaDataURI: string }
>;

export type PhygitalAssetCreatedEventFilter =
  TypedEventFilter<PhygitalAssetCreatedEvent>;

export type PhygitalAssetDestroyedEvent = TypedEvent<
  [BigNumber, string],
  { tokenId: BigNumber; ownerOrApproved: string }
>;

export type PhygitalAssetDestroyedEventFilter =
  TypedEventFilter<PhygitalAssetDestroyedEvent>;

export type RentalInfoEvent = TypedEvent<
  [BigNumber, boolean, BigNumber, string],
  { tokenId: BigNumber; isRentable: boolean; price: BigNumber; renter: string }
>;

export type RentalInfoEventFilter = TypedEventFilter<RentalInfoEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; tokenId: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export type UpdateAssetStatusEvent = TypedEvent<
  [string, number, BigNumber],
  { user: string; assetStatus: number; time: BigNumber }
>;

export type UpdateAssetStatusEventFilter =
  TypedEventFilter<UpdateAssetStatusEvent>;

export interface Phygital extends BaseContract {
  contractName: "Phygital";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PhygitalInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    Counter(overrides?: CallOverrides): Promise<[BigNumber]>;

    accessMasterAddress(overrides?: CallOverrides): Promise<[string]>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    createAsset(
      metadataURI: string,
      royaltyPercentBasisPoint: BigNumberish,
      _phygitalID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegateAssetCreation(
      creator: string,
      metadataURI: string,
      royaltyPercentBasisPoint: BigNumberish,
      phygitalID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    destroyAsset(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    nftPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    phygitalAssets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, number] & {
        registerTime: BigNumber;
        phygitalId: string;
        status: number;
      }
    >;

    phygitalIdCheck(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    rentables(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber] & {
        isRentable: boolean;
        user: string;
        expires: BigNumber;
        hourlyRate: BigNumber;
      }
    >;

    royaltyInfo(
      tokenId: BigNumberish,
      salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setItemStatus(
      tokenId: BigNumberish,
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    tradeHub(overrides?: CallOverrides): Promise<[string]>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[number]>;
  };

  Counter(overrides?: CallOverrides): Promise<BigNumber>;

  accessMasterAddress(overrides?: CallOverrides): Promise<string>;

  approve(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  createAsset(
    metadataURI: string,
    royaltyPercentBasisPoint: BigNumberish,
    _phygitalID: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegateAssetCreation(
    creator: string,
    metadataURI: string,
    royaltyPercentBasisPoint: BigNumberish,
    phygitalID: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  destroyAsset(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getApproved(
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  isApprovedForAll(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  nftPrice(overrides?: CallOverrides): Promise<BigNumber>;

  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  phygitalAssets(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, number] & {
      registerTime: BigNumber;
      phygitalId: string;
      status: number;
    }
  >;

  phygitalIdCheck(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  rentables(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, BigNumber, BigNumber] & {
      isRentable: boolean;
      user: string;
      expires: BigNumber;
      hourlyRate: BigNumber;
    }
  >;

  royaltyInfo(
    tokenId: BigNumberish,
    salePrice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  "safeTransferFrom(address,address,uint256)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,bytes)"(
    from: string,
    to: string,
    tokenId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setItemStatus(
    tokenId: BigNumberish,
    _status: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenByIndex(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenOfOwnerByIndex(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  tradeHub(overrides?: CallOverrides): Promise<string>;

  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    Counter(overrides?: CallOverrides): Promise<BigNumber>;

    accessMasterAddress(overrides?: CallOverrides): Promise<string>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    createAsset(
      metadataURI: string,
      royaltyPercentBasisPoint: BigNumberish,
      _phygitalID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    delegateAssetCreation(
      creator: string,
      metadataURI: string,
      royaltyPercentBasisPoint: BigNumberish,
      phygitalID: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    destroyAsset(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    nftPrice(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    phygitalAssets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, number] & {
        registerTime: BigNumber;
        phygitalId: string;
        status: number;
      }
    >;

    phygitalIdCheck(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    rentables(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber] & {
        isRentable: boolean;
        user: string;
        expires: BigNumber;
        hourlyRate: BigNumber;
      }
    >;

    royaltyInfo(
      tokenId: BigNumberish,
      salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setItemStatus(
      tokenId: BigNumberish,
      _status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    tradeHub(overrides?: CallOverrides): Promise<string>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      approved?: string | null,
      tokenId?: BigNumberish | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "FundTransferred(address,address,uint256,uint256)"(
      sender?: null,
      reciepient?: null,
      tokenId?: null,
      amount?: null
    ): FundTransferredEventFilter;
    FundTransferred(
      sender?: null,
      reciepient?: null,
      tokenId?: null,
      amount?: null
    ): FundTransferredEventFilter;

    "PhygitalAssetCreated(uint256,address,string)"(
      tokenID?: null,
      creator?: string | null,
      metaDataURI?: null
    ): PhygitalAssetCreatedEventFilter;
    PhygitalAssetCreated(
      tokenID?: null,
      creator?: string | null,
      metaDataURI?: null
    ): PhygitalAssetCreatedEventFilter;

    "PhygitalAssetDestroyed(uint256,address)"(
      tokenId?: BigNumberish | null,
      ownerOrApproved?: null
    ): PhygitalAssetDestroyedEventFilter;
    PhygitalAssetDestroyed(
      tokenId?: BigNumberish | null,
      ownerOrApproved?: null
    ): PhygitalAssetDestroyedEventFilter;

    "RentalInfo(uint256,bool,uint256,address)"(
      tokenId?: null,
      isRentable?: null,
      price?: null,
      renter?: string | null
    ): RentalInfoEventFilter;
    RentalInfo(
      tokenId?: null,
      isRentable?: null,
      price?: null,
      renter?: string | null
    ): RentalInfoEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      tokenId?: BigNumberish | null
    ): TransferEventFilter;

    "UpdateAssetStatus(address,uint8,uint256)"(
      user?: null,
      assetStatus?: null,
      time?: null
    ): UpdateAssetStatusEventFilter;
    UpdateAssetStatus(
      user?: null,
      assetStatus?: null,
      time?: null
    ): UpdateAssetStatusEventFilter;
  };

  estimateGas: {
    Counter(overrides?: CallOverrides): Promise<BigNumber>;

    accessMasterAddress(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    createAsset(
      metadataURI: string,
      royaltyPercentBasisPoint: BigNumberish,
      _phygitalID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegateAssetCreation(
      creator: string,
      metadataURI: string,
      royaltyPercentBasisPoint: BigNumberish,
      phygitalID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    destroyAsset(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    nftPrice(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    phygitalAssets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    phygitalIdCheck(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rentables(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    royaltyInfo(
      tokenId: BigNumberish,
      salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setItemStatus(
      tokenId: BigNumberish,
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    tradeHub(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    Counter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    accessMasterAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAsset(
      metadataURI: string,
      royaltyPercentBasisPoint: BigNumberish,
      _phygitalID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegateAssetCreation(
      creator: string,
      metadataURI: string,
      royaltyPercentBasisPoint: BigNumberish,
      phygitalID: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    destroyAsset(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nftPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    phygitalAssets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    phygitalIdCheck(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rentables(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    royaltyInfo(
      tokenId: BigNumberish,
      salePrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setItemStatus(
      tokenId: BigNumberish,
      _status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tradeHub(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}