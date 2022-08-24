// import World from './world'

// const root: HTMLElement | null = document.getElementById('root')
// const world = new World('Hello World!!!')
// world.sayHello(root)

// 03.基本の型定義
// import {anySample, notExistSample, primitiveSample, unknownSample} from './basic'

// anySample()
// notExistSample()
// primitiveSample()
// unknownSample()

// 04.関数の型定義
// import {logMessage,logMessage2, logMessage3, logMessage4 } from './function/basic'
// import {isUserSignedIn, isUserSignedIn2, sumProductsPrice} from './function/parameters'

// logMessage("Hello TypeScript")
// logMessage2("Hello TypeScript2")
// logMessage3("Hello TypeScript3")
// logMessage4("Hello TypeScript4")
// alwaysThrowError("Hello TypeScript5")

// isUserSignedIn( "ABC", "Torahack" )
// isUserSignedIn( "DEF" )
// isUserSignedIn2( "ABC" )
// const sum =sumProductsPrice(100, 200, 300, 400, 500)
// console.log('FUNCTION parameters sample 5:', sum)

// 05.オブジェクトの型定義
// import objectSample from './object/object'
// import typeAliasSample from './object/alias'

// objectSample()
// typeAliasSample()

// 06.配列とタプルの型定義
// import arraySample from './array/array'
// import tupleSample from './array/tuple'

// arraySample()
// tupleSample()

// 07.ジェネリック型とポリモーフィズム
// import genericsBasicSample from "./generics/basic";
// import genericAdvancedSample from "./generics/advanced";

// genericsBasicSample()
// genericAdvancedSample()

// 10.非同期処理
// import callbackSample from "./asynchronous/callback";
// import promiseSample from "./asynchronous/promise";
import asyncAwaitSample from "./asynchronous/asyncAwait";

// callbackSample()
// promiseSample()
asyncAwaitSample()