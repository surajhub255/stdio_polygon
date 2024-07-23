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

export declare namespace DID {
  export type AttributeStruct = {
    name: BytesLike;
    value: BytesLike;
    validity: BigNumberish;
    created: BigNumberish;
  };

  export type AttributeStructOutput = [string, string, number, BigNumber] & {
    name: string;
    value: string;
    validity: number;
    created: BigNumber;
  };
}

export declare namespace ErebrusWiFiRegistry {
  export type VPNNodeStruct = {
    nodeId: BigNumberish;
    peaqDid: string;
    nodename: string;
    ipaddress: string;
    ispinfo: string;
    region: string;
    location: string;
    status: BigNumberish;
  };

  export type VPNNodeStructOutput = [
    BigNumber,
    string,
    string,
    string,
    string,
    string,
    string,
    number
  ] & {
    nodeId: BigNumber;
    peaqDid: string;
    nodename: string;
    ipaddress: string;
    ispinfo: string;
    region: string;
    location: string;
    status: number;
  };
}

export interface ErebrusWiFiRegistryInterface extends utils.Interface {
  contractName: "ErebrusWiFiRegistry";
  functions: {
    "addAttribute(address,bytes,bytes,uint32)": FunctionFragment;
    "deactivateNode(uint256)": FunctionFragment;
    "deviceCheckpoint(bytes32,string)": FunctionFragment;
    "deviceCheckpoints(bytes32,uint256)": FunctionFragment;
    "deviceToUser(bytes32)": FunctionFragment;
    "didToUser(address)": FunctionFragment;
    "getWifiDetails(uint256)": FunctionFragment;
    "readAttribute(address,bytes)": FunctionFragment;
    "registerNodeOperator(address,string,address,string,string,uint256,uint256)": FunctionFragment;
    "registerVpnNode(address,(uint256,address,string,string,string,string,string,uint8))": FunctionFragment;
    "removeAttribute(address,bytes)": FunctionFragment;
    "totalCheckpoints(bytes32)": FunctionFragment;
    "updateAttribute(address,bytes,bytes,uint32)": FunctionFragment;
    "updateVPNNode(uint8,string)": FunctionFragment;
    "updateWiFiNode(uint256,string,string,uint256)": FunctionFragment;
    "walletToVpnNodeInfo(address)": FunctionFragment;
    "wifiNodeOperators(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAttribute",
    values: [string, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateNode",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deviceCheckpoint",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deviceCheckpoints",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deviceToUser",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "didToUser", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getWifiDetails",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "readAttribute",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerNodeOperator",
    values: [string, string, string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerVpnNode",
    values: [string, ErebrusWiFiRegistry.VPNNodeStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAttribute",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalCheckpoints",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAttribute",
    values: [string, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateVPNNode",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateWiFiNode",
    values: [BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "walletToVpnNodeInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "wifiNodeOperators",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAttribute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deactivateNode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deviceCheckpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deviceCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deviceToUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "didToUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWifiDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readAttribute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerNodeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerVpnNode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAttribute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalCheckpoints",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAttribute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateVPNNode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateWiFiNode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "walletToVpnNodeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wifiNodeOperators",
    data: BytesLike
  ): Result;

  events: {
    "AddAttribute(address,address,bytes,bytes,uint32)": EventFragment;
    "NodeDeactivated(address)": EventFragment;
    "NodeOperatorUpdated(address,string,string)": EventFragment;
    "RemoveAttribte(address,bytes)": EventFragment;
    "UpdateAttribute(address,address,bytes,bytes,uint32)": EventFragment;
    "VPNUpdated(uint256,uint8,string)": EventFragment;
    "VpnNodeRegistered(uint256,string,string,string,string,string)": EventFragment;
    "WifiNodeOperatorRegistered(uint256,address,string,string,string,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddAttribute"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NodeDeactivated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NodeOperatorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveAttribte"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateAttribute"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VPNUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VpnNodeRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WifiNodeOperatorRegistered"): EventFragment;
}

export type AddAttributeEvent = TypedEvent<
  [string, string, string, string, number],
  {
    sender: string;
    did_account: string;
    name: string;
    value: string;
    validity: number;
  }
>;

export type AddAttributeEventFilter = TypedEventFilter<AddAttributeEvent>;

export type NodeDeactivatedEvent = TypedEvent<
  [string],
  { operatorAddress: string }
>;

export type NodeDeactivatedEventFilter = TypedEventFilter<NodeDeactivatedEvent>;

export type NodeOperatorUpdatedEvent = TypedEvent<
  [string, string, string],
  { operatorAddress: string; ssid: string; location: string }
>;

export type NodeOperatorUpdatedEventFilter =
  TypedEventFilter<NodeOperatorUpdatedEvent>;

export type RemoveAttribteEvent = TypedEvent<
  [string, string],
  { did_account: string; name: string }
>;

export type RemoveAttribteEventFilter = TypedEventFilter<RemoveAttribteEvent>;

export type UpdateAttributeEvent = TypedEvent<
  [string, string, string, string, number],
  {
    sender: string;
    did_account: string;
    name: string;
    value: string;
    validity: number;
  }
>;

export type UpdateAttributeEventFilter = TypedEventFilter<UpdateAttributeEvent>;

export type VPNUpdatedEvent = TypedEvent<
  [BigNumber, number, string],
  { nodeId: BigNumber; updatedStatus: number; updatedRegion: string }
>;

export type VPNUpdatedEventFilter = TypedEventFilter<VPNUpdatedEvent>;

export type VpnNodeRegisteredEvent = TypedEvent<
  [BigNumber, string, string, string, string, string],
  {
    nodeId: BigNumber;
    nodename: string;
    ipaddress: string;
    ispinfo: string;
    region: string;
    location: string;
  }
>;

export type VpnNodeRegisteredEventFilter =
  TypedEventFilter<VpnNodeRegisteredEvent>;

export type WifiNodeOperatorRegisteredEvent = TypedEvent<
  [BigNumber, string, string, string, string, BigNumber, BigNumber],
  {
    nodeID: BigNumber;
    operatorAddress: string;
    deviceId: string;
    ssid: string;
    location: string;
    pricePerMinute: BigNumber;
    latency: BigNumber;
  }
>;

export type WifiNodeOperatorRegisteredEventFilter =
  TypedEventFilter<WifiNodeOperatorRegisteredEvent>;

export interface ErebrusWiFiRegistry extends BaseContract {
  contractName: "ErebrusWiFiRegistry";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ErebrusWiFiRegistryInterface;

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
    addAttribute(
      did_account: string,
      name: BytesLike,
      value: BytesLike,
      validity_for: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deactivateNode(
      nodeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deviceCheckpoint(
      deviceId: BytesLike,
      dataHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deviceCheckpoints(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    deviceToUser(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    didToUser(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    getWifiDetails(
      nodeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { price: BigNumber; owner: string }>;

    readAttribute(
      did_account: string,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<[DID.AttributeStructOutput]>;

    registerNodeOperator(
      user: string,
      _deviceId: string,
      _peaqDid: string,
      _ssid: string,
      _location: string,
      _pricePermin: BigNumberish,
      _latency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerVpnNode(
      user: string,
      node: ErebrusWiFiRegistry.VPNNodeStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeAttribute(
      did_account: string,
      name: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalCheckpoints(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    updateAttribute(
      did_account: string,
      name: BytesLike,
      value: BytesLike,
      validity_for: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateVPNNode(
      _status: BigNumberish,
      _region: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateWiFiNode(
      nodeID: BigNumberish,
      ssid: string,
      location: string,
      pricePerMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    walletToVpnNodeInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, string, string, string, number] & {
        nodeId: BigNumber;
        peaqDid: string;
        nodename: string;
        ipaddress: string;
        ispinfo: string;
        region: string;
        location: string;
        status: number;
      }
    >;

    wifiNodeOperators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        user: string;
        deviceId: string;
        peaqDid: string;
        ssid: string;
        location: string;
        pricePerMinute: BigNumber;
        latency: BigNumber;
        isActive: boolean;
      }
    >;
  };

  addAttribute(
    did_account: string,
    name: BytesLike,
    value: BytesLike,
    validity_for: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deactivateNode(
    nodeID: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deviceCheckpoint(
    deviceId: BytesLike,
    dataHash: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deviceCheckpoints(
    arg0: BytesLike,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  deviceToUser(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  didToUser(arg0: string, overrides?: CallOverrides): Promise<string>;

  getWifiDetails(
    nodeID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string] & { price: BigNumber; owner: string }>;

  readAttribute(
    did_account: string,
    name: BytesLike,
    overrides?: CallOverrides
  ): Promise<DID.AttributeStructOutput>;

  registerNodeOperator(
    user: string,
    _deviceId: string,
    _peaqDid: string,
    _ssid: string,
    _location: string,
    _pricePermin: BigNumberish,
    _latency: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerVpnNode(
    user: string,
    node: ErebrusWiFiRegistry.VPNNodeStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeAttribute(
    did_account: string,
    name: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalCheckpoints(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  updateAttribute(
    did_account: string,
    name: BytesLike,
    value: BytesLike,
    validity_for: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateVPNNode(
    _status: BigNumberish,
    _region: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateWiFiNode(
    nodeID: BigNumberish,
    ssid: string,
    location: string,
    pricePerMin: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  walletToVpnNodeInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, string, string, string, number] & {
      nodeId: BigNumber;
      peaqDid: string;
      nodename: string;
      ipaddress: string;
      ispinfo: string;
      region: string;
      location: string;
      status: number;
    }
  >;

  wifiNodeOperators(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, string, BigNumber, BigNumber, boolean] & {
      user: string;
      deviceId: string;
      peaqDid: string;
      ssid: string;
      location: string;
      pricePerMinute: BigNumber;
      latency: BigNumber;
      isActive: boolean;
    }
  >;

  callStatic: {
    addAttribute(
      did_account: string,
      name: BytesLike,
      value: BytesLike,
      validity_for: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deactivateNode(
      nodeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deviceCheckpoint(
      deviceId: BytesLike,
      dataHash: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deviceCheckpoints(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    deviceToUser(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    didToUser(arg0: string, overrides?: CallOverrides): Promise<string>;

    getWifiDetails(
      nodeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string] & { price: BigNumber; owner: string }>;

    readAttribute(
      did_account: string,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<DID.AttributeStructOutput>;

    registerNodeOperator(
      user: string,
      _deviceId: string,
      _peaqDid: string,
      _ssid: string,
      _location: string,
      _pricePermin: BigNumberish,
      _latency: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    registerVpnNode(
      user: string,
      node: ErebrusWiFiRegistry.VPNNodeStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    removeAttribute(
      did_account: string,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalCheckpoints(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateAttribute(
      did_account: string,
      name: BytesLike,
      value: BytesLike,
      validity_for: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateVPNNode(
      _status: BigNumberish,
      _region: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateWiFiNode(
      nodeID: BigNumberish,
      ssid: string,
      location: string,
      pricePerMin: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    walletToVpnNodeInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, string, string, string, number] & {
        nodeId: BigNumber;
        peaqDid: string;
        nodename: string;
        ipaddress: string;
        ispinfo: string;
        region: string;
        location: string;
        status: number;
      }
    >;

    wifiNodeOperators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        user: string;
        deviceId: string;
        peaqDid: string;
        ssid: string;
        location: string;
        pricePerMinute: BigNumber;
        latency: BigNumber;
        isActive: boolean;
      }
    >;
  };

  filters: {
    "AddAttribute(address,address,bytes,bytes,uint32)"(
      sender?: null,
      did_account?: null,
      name?: null,
      value?: null,
      validity?: null
    ): AddAttributeEventFilter;
    AddAttribute(
      sender?: null,
      did_account?: null,
      name?: null,
      value?: null,
      validity?: null
    ): AddAttributeEventFilter;

    "NodeDeactivated(address)"(
      operatorAddress?: string | null
    ): NodeDeactivatedEventFilter;
    NodeDeactivated(
      operatorAddress?: string | null
    ): NodeDeactivatedEventFilter;

    "NodeOperatorUpdated(address,string,string)"(
      operatorAddress?: string | null,
      ssid?: null,
      location?: null
    ): NodeOperatorUpdatedEventFilter;
    NodeOperatorUpdated(
      operatorAddress?: string | null,
      ssid?: null,
      location?: null
    ): NodeOperatorUpdatedEventFilter;

    "RemoveAttribte(address,bytes)"(
      did_account?: null,
      name?: null
    ): RemoveAttribteEventFilter;
    RemoveAttribte(did_account?: null, name?: null): RemoveAttribteEventFilter;

    "UpdateAttribute(address,address,bytes,bytes,uint32)"(
      sender?: null,
      did_account?: null,
      name?: null,
      value?: null,
      validity?: null
    ): UpdateAttributeEventFilter;
    UpdateAttribute(
      sender?: null,
      did_account?: null,
      name?: null,
      value?: null,
      validity?: null
    ): UpdateAttributeEventFilter;

    "VPNUpdated(uint256,uint8,string)"(
      nodeId?: null,
      updatedStatus?: null,
      updatedRegion?: null
    ): VPNUpdatedEventFilter;
    VPNUpdated(
      nodeId?: null,
      updatedStatus?: null,
      updatedRegion?: null
    ): VPNUpdatedEventFilter;

    "VpnNodeRegistered(uint256,string,string,string,string,string)"(
      nodeId?: null,
      nodename?: null,
      ipaddress?: null,
      ispinfo?: null,
      region?: null,
      location?: null
    ): VpnNodeRegisteredEventFilter;
    VpnNodeRegistered(
      nodeId?: null,
      nodename?: null,
      ipaddress?: null,
      ispinfo?: null,
      region?: null,
      location?: null
    ): VpnNodeRegisteredEventFilter;

    "WifiNodeOperatorRegistered(uint256,address,string,string,string,uint256,uint256)"(
      nodeID?: null,
      operatorAddress?: string | null,
      deviceId?: null,
      ssid?: null,
      location?: null,
      pricePerMinute?: null,
      latency?: null
    ): WifiNodeOperatorRegisteredEventFilter;
    WifiNodeOperatorRegistered(
      nodeID?: null,
      operatorAddress?: string | null,
      deviceId?: null,
      ssid?: null,
      location?: null,
      pricePerMinute?: null,
      latency?: null
    ): WifiNodeOperatorRegisteredEventFilter;
  };

  estimateGas: {
    addAttribute(
      did_account: string,
      name: BytesLike,
      value: BytesLike,
      validity_for: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deactivateNode(
      nodeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deviceCheckpoint(
      deviceId: BytesLike,
      dataHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deviceCheckpoints(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deviceToUser(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    didToUser(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getWifiDetails(
      nodeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readAttribute(
      did_account: string,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerNodeOperator(
      user: string,
      _deviceId: string,
      _peaqDid: string,
      _ssid: string,
      _location: string,
      _pricePermin: BigNumberish,
      _latency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerVpnNode(
      user: string,
      node: ErebrusWiFiRegistry.VPNNodeStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeAttribute(
      did_account: string,
      name: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalCheckpoints(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateAttribute(
      did_account: string,
      name: BytesLike,
      value: BytesLike,
      validity_for: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateVPNNode(
      _status: BigNumberish,
      _region: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateWiFiNode(
      nodeID: BigNumberish,
      ssid: string,
      location: string,
      pricePerMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    walletToVpnNodeInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wifiNodeOperators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAttribute(
      did_account: string,
      name: BytesLike,
      value: BytesLike,
      validity_for: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deactivateNode(
      nodeID: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deviceCheckpoint(
      deviceId: BytesLike,
      dataHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deviceCheckpoints(
      arg0: BytesLike,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deviceToUser(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    didToUser(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWifiDetails(
      nodeID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readAttribute(
      did_account: string,
      name: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerNodeOperator(
      user: string,
      _deviceId: string,
      _peaqDid: string,
      _ssid: string,
      _location: string,
      _pricePermin: BigNumberish,
      _latency: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerVpnNode(
      user: string,
      node: ErebrusWiFiRegistry.VPNNodeStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeAttribute(
      did_account: string,
      name: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalCheckpoints(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateAttribute(
      did_account: string,
      name: BytesLike,
      value: BytesLike,
      validity_for: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateVPNNode(
      _status: BigNumberish,
      _region: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateWiFiNode(
      nodeID: BigNumberish,
      ssid: string,
      location: string,
      pricePerMin: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    walletToVpnNodeInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wifiNodeOperators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}