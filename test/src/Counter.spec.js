const assert = require('power-assert');
const Counter = require('../../src/Counter');

describe('Counterクラスのテスト', () => {
   
        it('_countプロパティの有無を確認', () =>{
            const counter = new Counter();
            assert.strictEqual(counter.hasOwnProperty('_count'), true);
        });

        it('_countプロパティの初期値が0であることを確認', () =>{
            const counter = new Counter();
            assert.strictEqual(counter._count, 0);
        });

      
        it('Counterクラスはincrementメソッドを持つ', () =>{
            const counter = new Counter();
            assert.strictEqual(typeof counter.increment === 'function', true);
        });
   
        it('incrementメソッドを実行すると_countプロパティの値は１増える', () =>{
            const counter = new Counter();

            assert.strictEqual(counter._count, 0);
            counter.increment();
            assert.strictEqual(counter._count, 1);
        });
   
        it('Counterクラスはdecrementメソッドを持つ', () =>{
            const counter = new Counter();
            assert.strictEqual(typeof counter.decrement === 'function', true);
        });

        it('decrementメソッドを実行すると_countプロパティの値は１減る', () =>{
            const counter = new Counter();

            assert.strictEqual(counter._count, 0);
            counter.decrement();
            assert.strictEqual(counter._count, -1);
        });
  

});