pragma solidity ^0.4.24;

contract Greeting {
    string public message;

    constructor(string initialMessage) public {
        message = initialMessage;
    }
    
    function ModifyMessage(string newMessage) public {
        message = newMessage;
    }
}