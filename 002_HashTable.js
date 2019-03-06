/**
 * Created by JongHyeok Choi on 06/03/2019.
 */

/**
 * HashTable은 O(1) ~ O(n)의 시간 복잡도를 가진다.
 * 입력 Key가 들어올 때 Hash Code로 변환한다. 이 Code를 데이터를 가질 수 있는 Value가 있을 수 있는
 * 방(Array)의 수로 나누어 나머지를 방의 Index로 지정한다.
 *
 * Hash Algorithm가 잘 설계되어 있을 경우 O(1)으로 설계될 수 있지만
 * 모두 같은 방에 들어갔을 때에는 O(n)의 복잡도를 가지게 된다.
 *
 */

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    //key로 hashCode를 구하는 함수. 여기서는 아스키코드 사용
    getHashCode(key) {
        let hashcode = 0;

        for(let c in key) {
            hashcode += c.charCodeAt(0);
        }
        return hashcode;
    }

    //hashCode가 어느 방(index)에 들어갈지 결정하는 함수. 여기서는 방의 수만큼 나눈 나머지를 index로 사용
    convertToIndex(hashCode) {
        return hashCode % this.data.length;
    }

    //리스트에서 키를 조회한다
    searchKey(list, key) {
        if(list == null) return null;

        let node;
        for(let i in list) {
            node = list[i];
            if(list[i].key === key) {
                return node;
            }
        }
    }

    put(key, value) {
        let hashcode = this.getHashCode(key);
        let index = this.convertToIndex(hashcode);

        let list = this.data[index];
        if(list == null) {
            list = [];
            this.data[index] = list;
        }

        let node = this.searchKey(list, key);
        if(node == null) {
            list.push(new Node(key, value));
        } else {
            node.value = value;
        }
    }

    get(key) {
        let hashCode = this.getHashCode(key);
        let index = this.convertToIndex(hashCode);

        let list = this.data[index];
        let node = this.searchKey(list, key);
        return node ? node: "Not Found";
    }
}

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

let hashTable = new HashTable(3);
hashTable.put("one", 1);
hashTable.put("two", 2);
hashTable.put("three", 3);

debugger;

console.log(hashTable);

console.log(hashTable.get("one"));
console.log(hashTable.get("onasde"));


hashTable.put("one", 3);

console.log(hashTable.get("one"));