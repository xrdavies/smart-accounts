/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface INonceManagerInterface extends utils.Interface {
  functions: {
    "getNonce(address,uint192)": FunctionFragment;
    "incrementNonce(uint192)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getNonce" | "incrementNonce"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getNonce",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "incrementNonce",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "incrementNonce",
    data: BytesLike
  ): Result;

  events: {};
}

export interface INonceManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: INonceManagerInterface;

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
    getNonce(
      sender: string,
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    incrementNonce(
      key: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  getNonce(
    sender: string,
    key: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  incrementNonce(
    key: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    getNonce(
      sender: string,
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    incrementNonce(key: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getNonce(
      sender: string,
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    incrementNonce(
      key: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getNonce(
      sender: string,
      key: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    incrementNonce(
      key: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}