// 블록체인 네트워크 설정
class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return {
            index: 0,
            previousHash: "0",
            data: "Genesis Block",
            timestamp: Date.now()
        };
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.chain[this.chain.length - 1].hash;
        newBlock.hash = this.calculateHash(newBlock);
        this.chain.push(newBlock);
    }

    calculateHash(block) {
        return crypto.createHash('sha256').update(JSON.stringify(block)).digest('hex');
    }
}

// 트랜잭션 클래스
class Transaction {
    constructor(from, to, value) {
        this.from = from;
        this.to = to;
        this.value = value;
    }
}

// 클라이언트 아이디 생성
class Client {
    constructor(id) {
        this.id = id;
    }

    createClientID() {
        return `Client-${Math.random().toString(36).substr(2, 9)}`;
    }
}

// 클릭커 게임 로직
class ClickerGame {
    constructor() {
        this.blockchain = new Blockchain();
        this.client = new Client();
        this.score = 0;
        this.chatLog = [];
    }

    startGame() {
        this.clientID = this.client.createClientID();
        document.getElementById("client-id-span").innerText = this.clientID;
    }

    clickButton() {
        this.score++;
        document.getElementById("score").innerText = `Score: ${this.score}`;
        this.addTransaction();
    }

    addTransaction() {
        const transaction = new Transaction(this.clientID, "ClickerGame", 1);
        const block = {
            index: this.blockchain.chain.length,
            data: [transaction],
            timestamp: Date.now()
        };
        this.blockchain.addBlock(block);
    }

    tradeScore() {
        // TO DO: implement score trading logic
    }
}

// 채팅 기능
class Chat {
    constructor() {
        this.messages = [];
    }

    sendMessage(message) {
        this.messages.push(message);
        document.getElementById("chat-log").innerText = this.messages.join("\n");
    }

    receiveMessage(message) {
        this.messages.push(message);
        document.getElementById("chat-log").innerText = this.messages.join("\n");
    }
}

// 클릭커 게임 실행
const clickerGame = new ClickerGame();
clickerGame.startGame();

function add() {
    clickerGame.clickButton();
}