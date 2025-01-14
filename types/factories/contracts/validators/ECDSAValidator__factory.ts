/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ECDSAValidator,
  ECDSAValidatorInterface,
} from "../../../contracts/validators/ECDSAValidator";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "enable",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "validCaller",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "validateSignature",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610888806100206000396000f3fe6080604052600436106100705760003560e01c8063971604c61161004e578063971604c6146101365780639ea9bd5914610157578063a3f4df7e14610195578063ffa1ad74146101eb57600080fd5b806301ffc9a7146100755780630c959556146100d3578063666e1b39146100e8575b600080fd5b34801561008157600080fd5b506100be610090366004610607565b7fffffffff000000000000000000000000000000000000000000000000000000001663052a2cc960e01b1490565b60405190151581526020015b60405180910390f35b6100e66100e1366004610692565b610234565b005b3480156100f457600080fd5b5061011e6101033660046106f0565b6000602081905290815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016100ca565b61014961014436600461070b565b6102cc565b6040519081526020016100ca565b34801561016357600080fd5b506100be610172366004610765565b5050336000908152602081905260409020546001600160a01b0391821691161490565b3480156101a157600080fd5b506101de6040518060400160405280600f81526020017f45434453412056616c696461746f72000000000000000000000000000000000081525081565b6040516100ca91906107b8565b3480156101f757600080fd5b506101de6040518060400160405280600581526020017f302e302e3100000000000000000000000000000000000000000000000000000081525081565b60006102436014828486610806565b61024c91610830565b3360008181526020819052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811660609690961c95861790915590519394506001600160a01b0316928492849290917f381c0d11398486654573703c51ee8210ce9461764d133f9f0e53b6a5397053319190a450505050565b6001600160a01b038481166000908152602081905260408120547f19457468657265756d205369676e6564204d6573736167653a0a3332000000008252601c869052603c8220919216906103568186868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061038892505050565b6001600160a01b0316826001600160a01b03161461037957600192505050610380565b6000925050505b949350505050565b600080600061039785856103ac565b915091506103a4816103f1565b509392505050565b60008082516041036103e25760208301516040840151606085015160001a6103d687828585610543565b945094505050506103ea565b506000905060025b9250929050565b600081600481111561040557610405610865565b0361040d5750565b600181600481111561042157610421610865565b036104735760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064015b60405180910390fd5b600281600481111561048757610487610865565b036104d45760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161046a565b60038160048111156104e8576104e8610865565b036105405760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161046a565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561057a57506000905060036105fe565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156105ce573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166105f7576000600192509250506105fe565b9150600090505b94509492505050565b60006020828403121561061957600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461064957600080fd5b9392505050565b60008083601f84011261066257600080fd5b50813567ffffffffffffffff81111561067a57600080fd5b6020830191508360208285010111156103ea57600080fd5b600080602083850312156106a557600080fd5b823567ffffffffffffffff8111156106bc57600080fd5b6106c885828601610650565b90969095509350505050565b80356001600160a01b03811681146106eb57600080fd5b919050565b60006020828403121561070257600080fd5b610649826106d4565b6000806000806060858703121561072157600080fd5b61072a856106d4565b935060208501359250604085013567ffffffffffffffff81111561074d57600080fd5b61075987828801610650565b95989497509550505050565b60008060006040848603121561077a57600080fd5b610783846106d4565b9250602084013567ffffffffffffffff81111561079f57600080fd5b6107ab86828701610650565b9497909650939450505050565b600060208083528351808285015260005b818110156107e5578581018301518582016040015282016107c9565b506000604082860101526040601f19601f8301168501019250505092915050565b6000808585111561081657600080fd5b8386111561082357600080fd5b5050820193919092039150565b6bffffffffffffffffffffffff19813581811691601485101561085d5780818660140360031b1b83161692505b505092915050565b634e487b7160e01b600052602160045260246000fdfea164736f6c6343000813000a";

type ECDSAValidatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ECDSAValidatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ECDSAValidator__factory extends ContractFactory {
  constructor(...args: ECDSAValidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<ECDSAValidator> {
    return super.deploy(overrides || {}) as Promise<ECDSAValidator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ECDSAValidator {
    return super.attach(address) as ECDSAValidator;
  }
  override connect(signer: Signer): ECDSAValidator__factory {
    return super.connect(signer) as ECDSAValidator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ECDSAValidatorInterface {
    return new utils.Interface(_abi) as ECDSAValidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ECDSAValidator {
    return new Contract(address, _abi, signerOrProvider) as ECDSAValidator;
  }
}
