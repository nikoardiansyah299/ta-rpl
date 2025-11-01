
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model jasa_pengirim
 * 
 */
export type jasa_pengirim = $Result.DefaultSelection<Prisma.$jasa_pengirimPayload>
/**
 * Model keranjang
 * 
 */
export type keranjang = $Result.DefaultSelection<Prisma.$keranjangPayload>
/**
 * Model produk
 * 
 */
export type produk = $Result.DefaultSelection<Prisma.$produkPayload>
/**
 * Model transaksi
 * 
 */
export type transaksi = $Result.DefaultSelection<Prisma.$transaksiPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const transaksi_metode_transaksi: {
  Bank: 'Bank',
  Qris: 'Qris',
  Dana: 'Dana',
  Paypal: 'Paypal'
};

export type transaksi_metode_transaksi = (typeof transaksi_metode_transaksi)[keyof typeof transaksi_metode_transaksi]

}

export type transaksi_metode_transaksi = $Enums.transaksi_metode_transaksi

export const transaksi_metode_transaksi: typeof $Enums.transaksi_metode_transaksi

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Jasa_pengirims
 * const jasa_pengirims = await prisma.jasa_pengirim.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Jasa_pengirims
   * const jasa_pengirims = await prisma.jasa_pengirim.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.jasa_pengirim`: Exposes CRUD operations for the **jasa_pengirim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jasa_pengirims
    * const jasa_pengirims = await prisma.jasa_pengirim.findMany()
    * ```
    */
  get jasa_pengirim(): Prisma.jasa_pengirimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keranjang`: Exposes CRUD operations for the **keranjang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keranjangs
    * const keranjangs = await prisma.keranjang.findMany()
    * ```
    */
  get keranjang(): Prisma.keranjangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produk`: Exposes CRUD operations for the **produk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produk.findMany()
    * ```
    */
  get produk(): Prisma.produkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaksi`: Exposes CRUD operations for the **transaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaksis
    * const transaksis = await prisma.transaksi.findMany()
    * ```
    */
  get transaksi(): Prisma.transaksiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    jasa_pengirim: 'jasa_pengirim',
    keranjang: 'keranjang',
    produk: 'produk',
    transaksi: 'transaksi',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "jasa_pengirim" | "keranjang" | "produk" | "transaksi" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      jasa_pengirim: {
        payload: Prisma.$jasa_pengirimPayload<ExtArgs>
        fields: Prisma.jasa_pengirimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jasa_pengirimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jasa_pengirimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jasa_pengirimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jasa_pengirimPayload>
          }
          findFirst: {
            args: Prisma.jasa_pengirimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jasa_pengirimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jasa_pengirimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jasa_pengirimPayload>
          }
          findMany: {
            args: Prisma.jasa_pengirimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jasa_pengirimPayload>[]
          }
          create: {
            args: Prisma.jasa_pengirimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jasa_pengirimPayload>
          }
          createMany: {
            args: Prisma.jasa_pengirimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.jasa_pengirimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jasa_pengirimPayload>
          }
          update: {
            args: Prisma.jasa_pengirimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jasa_pengirimPayload>
          }
          deleteMany: {
            args: Prisma.jasa_pengirimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jasa_pengirimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.jasa_pengirimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jasa_pengirimPayload>
          }
          aggregate: {
            args: Prisma.Jasa_pengirimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJasa_pengirim>
          }
          groupBy: {
            args: Prisma.jasa_pengirimGroupByArgs<ExtArgs>
            result: $Utils.Optional<Jasa_pengirimGroupByOutputType>[]
          }
          count: {
            args: Prisma.jasa_pengirimCountArgs<ExtArgs>
            result: $Utils.Optional<Jasa_pengirimCountAggregateOutputType> | number
          }
        }
      }
      keranjang: {
        payload: Prisma.$keranjangPayload<ExtArgs>
        fields: Prisma.keranjangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.keranjangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.keranjangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          findFirst: {
            args: Prisma.keranjangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.keranjangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          findMany: {
            args: Prisma.keranjangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>[]
          }
          create: {
            args: Prisma.keranjangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          createMany: {
            args: Prisma.keranjangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.keranjangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          update: {
            args: Prisma.keranjangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          deleteMany: {
            args: Prisma.keranjangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.keranjangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.keranjangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$keranjangPayload>
          }
          aggregate: {
            args: Prisma.KeranjangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeranjang>
          }
          groupBy: {
            args: Prisma.keranjangGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeranjangGroupByOutputType>[]
          }
          count: {
            args: Prisma.keranjangCountArgs<ExtArgs>
            result: $Utils.Optional<KeranjangCountAggregateOutputType> | number
          }
        }
      }
      produk: {
        payload: Prisma.$produkPayload<ExtArgs>
        fields: Prisma.produkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findFirst: {
            args: Prisma.produkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findMany: {
            args: Prisma.produkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          create: {
            args: Prisma.produkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          createMany: {
            args: Prisma.produkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.produkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          update: {
            args: Prisma.produkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          deleteMany: {
            args: Prisma.produkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.produkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          aggregate: {
            args: Prisma.ProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduk>
          }
          groupBy: {
            args: Prisma.produkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.produkCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukCountAggregateOutputType> | number
          }
        }
      }
      transaksi: {
        payload: Prisma.$transaksiPayload<ExtArgs>
        fields: Prisma.transaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          findFirst: {
            args: Prisma.transaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          findMany: {
            args: Prisma.transaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>[]
          }
          create: {
            args: Prisma.transaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          createMany: {
            args: Prisma.transaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          update: {
            args: Prisma.transaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          deleteMany: {
            args: Prisma.transaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          aggregate: {
            args: Prisma.TransaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksi>
          }
          groupBy: {
            args: Prisma.transaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaksiCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    jasa_pengirim?: jasa_pengirimOmit
    keranjang?: keranjangOmit
    produk?: produkOmit
    transaksi?: transaksiOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Jasa_pengirimCountOutputType
   */

  export type Jasa_pengirimCountOutputType = {
    transaksi: number
  }

  export type Jasa_pengirimCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | Jasa_pengirimCountOutputTypeCountTransaksiArgs
  }

  // Custom InputTypes
  /**
   * Jasa_pengirimCountOutputType without action
   */
  export type Jasa_pengirimCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jasa_pengirimCountOutputType
     */
    select?: Jasa_pengirimCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Jasa_pengirimCountOutputType without action
   */
  export type Jasa_pengirimCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksiWhereInput
  }


  /**
   * Count Type ProdukCountOutputType
   */

  export type ProdukCountOutputType = {
    keranjang: number
  }

  export type ProdukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjang?: boolean | ProdukCountOutputTypeCountKeranjangArgs
  }

  // Custom InputTypes
  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukCountOutputType
     */
    select?: ProdukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountKeranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: keranjangWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    keranjang: number
    transaksi: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjang?: boolean | UsersCountOutputTypeCountKeranjangArgs
    transaksi?: boolean | UsersCountOutputTypeCountTransaksiArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountKeranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: keranjangWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model jasa_pengirim
   */

  export type AggregateJasa_pengirim = {
    _count: Jasa_pengirimCountAggregateOutputType | null
    _avg: Jasa_pengirimAvgAggregateOutputType | null
    _sum: Jasa_pengirimSumAggregateOutputType | null
    _min: Jasa_pengirimMinAggregateOutputType | null
    _max: Jasa_pengirimMaxAggregateOutputType | null
  }

  export type Jasa_pengirimAvgAggregateOutputType = {
    id_pengiriman: number | null
    harga_pengiriman: number | null
  }

  export type Jasa_pengirimSumAggregateOutputType = {
    id_pengiriman: number | null
    harga_pengiriman: number | null
  }

  export type Jasa_pengirimMinAggregateOutputType = {
    id_pengiriman: number | null
    jasa_kirim: string | null
    harga_pengiriman: number | null
  }

  export type Jasa_pengirimMaxAggregateOutputType = {
    id_pengiriman: number | null
    jasa_kirim: string | null
    harga_pengiriman: number | null
  }

  export type Jasa_pengirimCountAggregateOutputType = {
    id_pengiriman: number
    jasa_kirim: number
    harga_pengiriman: number
    _all: number
  }


  export type Jasa_pengirimAvgAggregateInputType = {
    id_pengiriman?: true
    harga_pengiriman?: true
  }

  export type Jasa_pengirimSumAggregateInputType = {
    id_pengiriman?: true
    harga_pengiriman?: true
  }

  export type Jasa_pengirimMinAggregateInputType = {
    id_pengiriman?: true
    jasa_kirim?: true
    harga_pengiriman?: true
  }

  export type Jasa_pengirimMaxAggregateInputType = {
    id_pengiriman?: true
    jasa_kirim?: true
    harga_pengiriman?: true
  }

  export type Jasa_pengirimCountAggregateInputType = {
    id_pengiriman?: true
    jasa_kirim?: true
    harga_pengiriman?: true
    _all?: true
  }

  export type Jasa_pengirimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jasa_pengirim to aggregate.
     */
    where?: jasa_pengirimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jasa_pengirims to fetch.
     */
    orderBy?: jasa_pengirimOrderByWithRelationInput | jasa_pengirimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jasa_pengirimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jasa_pengirims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jasa_pengirims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jasa_pengirims
    **/
    _count?: true | Jasa_pengirimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Jasa_pengirimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Jasa_pengirimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Jasa_pengirimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Jasa_pengirimMaxAggregateInputType
  }

  export type GetJasa_pengirimAggregateType<T extends Jasa_pengirimAggregateArgs> = {
        [P in keyof T & keyof AggregateJasa_pengirim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJasa_pengirim[P]>
      : GetScalarType<T[P], AggregateJasa_pengirim[P]>
  }




  export type jasa_pengirimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jasa_pengirimWhereInput
    orderBy?: jasa_pengirimOrderByWithAggregationInput | jasa_pengirimOrderByWithAggregationInput[]
    by: Jasa_pengirimScalarFieldEnum[] | Jasa_pengirimScalarFieldEnum
    having?: jasa_pengirimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Jasa_pengirimCountAggregateInputType | true
    _avg?: Jasa_pengirimAvgAggregateInputType
    _sum?: Jasa_pengirimSumAggregateInputType
    _min?: Jasa_pengirimMinAggregateInputType
    _max?: Jasa_pengirimMaxAggregateInputType
  }

  export type Jasa_pengirimGroupByOutputType = {
    id_pengiriman: number
    jasa_kirim: string
    harga_pengiriman: number
    _count: Jasa_pengirimCountAggregateOutputType | null
    _avg: Jasa_pengirimAvgAggregateOutputType | null
    _sum: Jasa_pengirimSumAggregateOutputType | null
    _min: Jasa_pengirimMinAggregateOutputType | null
    _max: Jasa_pengirimMaxAggregateOutputType | null
  }

  type GetJasa_pengirimGroupByPayload<T extends jasa_pengirimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Jasa_pengirimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Jasa_pengirimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Jasa_pengirimGroupByOutputType[P]>
            : GetScalarType<T[P], Jasa_pengirimGroupByOutputType[P]>
        }
      >
    >


  export type jasa_pengirimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pengiriman?: boolean
    jasa_kirim?: boolean
    harga_pengiriman?: boolean
    transaksi?: boolean | jasa_pengirim$transaksiArgs<ExtArgs>
    _count?: boolean | Jasa_pengirimCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jasa_pengirim"]>



  export type jasa_pengirimSelectScalar = {
    id_pengiriman?: boolean
    jasa_kirim?: boolean
    harga_pengiriman?: boolean
  }

  export type jasa_pengirimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pengiriman" | "jasa_kirim" | "harga_pengiriman", ExtArgs["result"]["jasa_pengirim"]>
  export type jasa_pengirimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | jasa_pengirim$transaksiArgs<ExtArgs>
    _count?: boolean | Jasa_pengirimCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $jasa_pengirimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jasa_pengirim"
    objects: {
      transaksi: Prisma.$transaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pengiriman: number
      jasa_kirim: string
      harga_pengiriman: number
    }, ExtArgs["result"]["jasa_pengirim"]>
    composites: {}
  }

  type jasa_pengirimGetPayload<S extends boolean | null | undefined | jasa_pengirimDefaultArgs> = $Result.GetResult<Prisma.$jasa_pengirimPayload, S>

  type jasa_pengirimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jasa_pengirimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Jasa_pengirimCountAggregateInputType | true
    }

  export interface jasa_pengirimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jasa_pengirim'], meta: { name: 'jasa_pengirim' } }
    /**
     * Find zero or one Jasa_pengirim that matches the filter.
     * @param {jasa_pengirimFindUniqueArgs} args - Arguments to find a Jasa_pengirim
     * @example
     * // Get one Jasa_pengirim
     * const jasa_pengirim = await prisma.jasa_pengirim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jasa_pengirimFindUniqueArgs>(args: SelectSubset<T, jasa_pengirimFindUniqueArgs<ExtArgs>>): Prisma__jasa_pengirimClient<$Result.GetResult<Prisma.$jasa_pengirimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jasa_pengirim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jasa_pengirimFindUniqueOrThrowArgs} args - Arguments to find a Jasa_pengirim
     * @example
     * // Get one Jasa_pengirim
     * const jasa_pengirim = await prisma.jasa_pengirim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jasa_pengirimFindUniqueOrThrowArgs>(args: SelectSubset<T, jasa_pengirimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jasa_pengirimClient<$Result.GetResult<Prisma.$jasa_pengirimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jasa_pengirim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jasa_pengirimFindFirstArgs} args - Arguments to find a Jasa_pengirim
     * @example
     * // Get one Jasa_pengirim
     * const jasa_pengirim = await prisma.jasa_pengirim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jasa_pengirimFindFirstArgs>(args?: SelectSubset<T, jasa_pengirimFindFirstArgs<ExtArgs>>): Prisma__jasa_pengirimClient<$Result.GetResult<Prisma.$jasa_pengirimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jasa_pengirim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jasa_pengirimFindFirstOrThrowArgs} args - Arguments to find a Jasa_pengirim
     * @example
     * // Get one Jasa_pengirim
     * const jasa_pengirim = await prisma.jasa_pengirim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jasa_pengirimFindFirstOrThrowArgs>(args?: SelectSubset<T, jasa_pengirimFindFirstOrThrowArgs<ExtArgs>>): Prisma__jasa_pengirimClient<$Result.GetResult<Prisma.$jasa_pengirimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jasa_pengirims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jasa_pengirimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jasa_pengirims
     * const jasa_pengirims = await prisma.jasa_pengirim.findMany()
     * 
     * // Get first 10 Jasa_pengirims
     * const jasa_pengirims = await prisma.jasa_pengirim.findMany({ take: 10 })
     * 
     * // Only select the `id_pengiriman`
     * const jasa_pengirimWithId_pengirimanOnly = await prisma.jasa_pengirim.findMany({ select: { id_pengiriman: true } })
     * 
     */
    findMany<T extends jasa_pengirimFindManyArgs>(args?: SelectSubset<T, jasa_pengirimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jasa_pengirimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jasa_pengirim.
     * @param {jasa_pengirimCreateArgs} args - Arguments to create a Jasa_pengirim.
     * @example
     * // Create one Jasa_pengirim
     * const Jasa_pengirim = await prisma.jasa_pengirim.create({
     *   data: {
     *     // ... data to create a Jasa_pengirim
     *   }
     * })
     * 
     */
    create<T extends jasa_pengirimCreateArgs>(args: SelectSubset<T, jasa_pengirimCreateArgs<ExtArgs>>): Prisma__jasa_pengirimClient<$Result.GetResult<Prisma.$jasa_pengirimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jasa_pengirims.
     * @param {jasa_pengirimCreateManyArgs} args - Arguments to create many Jasa_pengirims.
     * @example
     * // Create many Jasa_pengirims
     * const jasa_pengirim = await prisma.jasa_pengirim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jasa_pengirimCreateManyArgs>(args?: SelectSubset<T, jasa_pengirimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jasa_pengirim.
     * @param {jasa_pengirimDeleteArgs} args - Arguments to delete one Jasa_pengirim.
     * @example
     * // Delete one Jasa_pengirim
     * const Jasa_pengirim = await prisma.jasa_pengirim.delete({
     *   where: {
     *     // ... filter to delete one Jasa_pengirim
     *   }
     * })
     * 
     */
    delete<T extends jasa_pengirimDeleteArgs>(args: SelectSubset<T, jasa_pengirimDeleteArgs<ExtArgs>>): Prisma__jasa_pengirimClient<$Result.GetResult<Prisma.$jasa_pengirimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jasa_pengirim.
     * @param {jasa_pengirimUpdateArgs} args - Arguments to update one Jasa_pengirim.
     * @example
     * // Update one Jasa_pengirim
     * const jasa_pengirim = await prisma.jasa_pengirim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jasa_pengirimUpdateArgs>(args: SelectSubset<T, jasa_pengirimUpdateArgs<ExtArgs>>): Prisma__jasa_pengirimClient<$Result.GetResult<Prisma.$jasa_pengirimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jasa_pengirims.
     * @param {jasa_pengirimDeleteManyArgs} args - Arguments to filter Jasa_pengirims to delete.
     * @example
     * // Delete a few Jasa_pengirims
     * const { count } = await prisma.jasa_pengirim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jasa_pengirimDeleteManyArgs>(args?: SelectSubset<T, jasa_pengirimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jasa_pengirims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jasa_pengirimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jasa_pengirims
     * const jasa_pengirim = await prisma.jasa_pengirim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jasa_pengirimUpdateManyArgs>(args: SelectSubset<T, jasa_pengirimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jasa_pengirim.
     * @param {jasa_pengirimUpsertArgs} args - Arguments to update or create a Jasa_pengirim.
     * @example
     * // Update or create a Jasa_pengirim
     * const jasa_pengirim = await prisma.jasa_pengirim.upsert({
     *   create: {
     *     // ... data to create a Jasa_pengirim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jasa_pengirim we want to update
     *   }
     * })
     */
    upsert<T extends jasa_pengirimUpsertArgs>(args: SelectSubset<T, jasa_pengirimUpsertArgs<ExtArgs>>): Prisma__jasa_pengirimClient<$Result.GetResult<Prisma.$jasa_pengirimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jasa_pengirims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jasa_pengirimCountArgs} args - Arguments to filter Jasa_pengirims to count.
     * @example
     * // Count the number of Jasa_pengirims
     * const count = await prisma.jasa_pengirim.count({
     *   where: {
     *     // ... the filter for the Jasa_pengirims we want to count
     *   }
     * })
    **/
    count<T extends jasa_pengirimCountArgs>(
      args?: Subset<T, jasa_pengirimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Jasa_pengirimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jasa_pengirim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jasa_pengirimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Jasa_pengirimAggregateArgs>(args: Subset<T, Jasa_pengirimAggregateArgs>): Prisma.PrismaPromise<GetJasa_pengirimAggregateType<T>>

    /**
     * Group by Jasa_pengirim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jasa_pengirimGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jasa_pengirimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jasa_pengirimGroupByArgs['orderBy'] }
        : { orderBy?: jasa_pengirimGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jasa_pengirimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJasa_pengirimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jasa_pengirim model
   */
  readonly fields: jasa_pengirimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jasa_pengirim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jasa_pengirimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaksi<T extends jasa_pengirim$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, jasa_pengirim$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jasa_pengirim model
   */
  interface jasa_pengirimFieldRefs {
    readonly id_pengiriman: FieldRef<"jasa_pengirim", 'Int'>
    readonly jasa_kirim: FieldRef<"jasa_pengirim", 'String'>
    readonly harga_pengiriman: FieldRef<"jasa_pengirim", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * jasa_pengirim findUnique
   */
  export type jasa_pengirimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jasa_pengirim
     */
    select?: jasa_pengirimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jasa_pengirim
     */
    omit?: jasa_pengirimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jasa_pengirimInclude<ExtArgs> | null
    /**
     * Filter, which jasa_pengirim to fetch.
     */
    where: jasa_pengirimWhereUniqueInput
  }

  /**
   * jasa_pengirim findUniqueOrThrow
   */
  export type jasa_pengirimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jasa_pengirim
     */
    select?: jasa_pengirimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jasa_pengirim
     */
    omit?: jasa_pengirimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jasa_pengirimInclude<ExtArgs> | null
    /**
     * Filter, which jasa_pengirim to fetch.
     */
    where: jasa_pengirimWhereUniqueInput
  }

  /**
   * jasa_pengirim findFirst
   */
  export type jasa_pengirimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jasa_pengirim
     */
    select?: jasa_pengirimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jasa_pengirim
     */
    omit?: jasa_pengirimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jasa_pengirimInclude<ExtArgs> | null
    /**
     * Filter, which jasa_pengirim to fetch.
     */
    where?: jasa_pengirimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jasa_pengirims to fetch.
     */
    orderBy?: jasa_pengirimOrderByWithRelationInput | jasa_pengirimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jasa_pengirims.
     */
    cursor?: jasa_pengirimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jasa_pengirims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jasa_pengirims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jasa_pengirims.
     */
    distinct?: Jasa_pengirimScalarFieldEnum | Jasa_pengirimScalarFieldEnum[]
  }

  /**
   * jasa_pengirim findFirstOrThrow
   */
  export type jasa_pengirimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jasa_pengirim
     */
    select?: jasa_pengirimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jasa_pengirim
     */
    omit?: jasa_pengirimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jasa_pengirimInclude<ExtArgs> | null
    /**
     * Filter, which jasa_pengirim to fetch.
     */
    where?: jasa_pengirimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jasa_pengirims to fetch.
     */
    orderBy?: jasa_pengirimOrderByWithRelationInput | jasa_pengirimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jasa_pengirims.
     */
    cursor?: jasa_pengirimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jasa_pengirims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jasa_pengirims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jasa_pengirims.
     */
    distinct?: Jasa_pengirimScalarFieldEnum | Jasa_pengirimScalarFieldEnum[]
  }

  /**
   * jasa_pengirim findMany
   */
  export type jasa_pengirimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jasa_pengirim
     */
    select?: jasa_pengirimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jasa_pengirim
     */
    omit?: jasa_pengirimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jasa_pengirimInclude<ExtArgs> | null
    /**
     * Filter, which jasa_pengirims to fetch.
     */
    where?: jasa_pengirimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jasa_pengirims to fetch.
     */
    orderBy?: jasa_pengirimOrderByWithRelationInput | jasa_pengirimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jasa_pengirims.
     */
    cursor?: jasa_pengirimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jasa_pengirims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jasa_pengirims.
     */
    skip?: number
    distinct?: Jasa_pengirimScalarFieldEnum | Jasa_pengirimScalarFieldEnum[]
  }

  /**
   * jasa_pengirim create
   */
  export type jasa_pengirimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jasa_pengirim
     */
    select?: jasa_pengirimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jasa_pengirim
     */
    omit?: jasa_pengirimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jasa_pengirimInclude<ExtArgs> | null
    /**
     * The data needed to create a jasa_pengirim.
     */
    data: XOR<jasa_pengirimCreateInput, jasa_pengirimUncheckedCreateInput>
  }

  /**
   * jasa_pengirim createMany
   */
  export type jasa_pengirimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jasa_pengirims.
     */
    data: jasa_pengirimCreateManyInput | jasa_pengirimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jasa_pengirim update
   */
  export type jasa_pengirimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jasa_pengirim
     */
    select?: jasa_pengirimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jasa_pengirim
     */
    omit?: jasa_pengirimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jasa_pengirimInclude<ExtArgs> | null
    /**
     * The data needed to update a jasa_pengirim.
     */
    data: XOR<jasa_pengirimUpdateInput, jasa_pengirimUncheckedUpdateInput>
    /**
     * Choose, which jasa_pengirim to update.
     */
    where: jasa_pengirimWhereUniqueInput
  }

  /**
   * jasa_pengirim updateMany
   */
  export type jasa_pengirimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jasa_pengirims.
     */
    data: XOR<jasa_pengirimUpdateManyMutationInput, jasa_pengirimUncheckedUpdateManyInput>
    /**
     * Filter which jasa_pengirims to update
     */
    where?: jasa_pengirimWhereInput
    /**
     * Limit how many jasa_pengirims to update.
     */
    limit?: number
  }

  /**
   * jasa_pengirim upsert
   */
  export type jasa_pengirimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jasa_pengirim
     */
    select?: jasa_pengirimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jasa_pengirim
     */
    omit?: jasa_pengirimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jasa_pengirimInclude<ExtArgs> | null
    /**
     * The filter to search for the jasa_pengirim to update in case it exists.
     */
    where: jasa_pengirimWhereUniqueInput
    /**
     * In case the jasa_pengirim found by the `where` argument doesn't exist, create a new jasa_pengirim with this data.
     */
    create: XOR<jasa_pengirimCreateInput, jasa_pengirimUncheckedCreateInput>
    /**
     * In case the jasa_pengirim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jasa_pengirimUpdateInput, jasa_pengirimUncheckedUpdateInput>
  }

  /**
   * jasa_pengirim delete
   */
  export type jasa_pengirimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jasa_pengirim
     */
    select?: jasa_pengirimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jasa_pengirim
     */
    omit?: jasa_pengirimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jasa_pengirimInclude<ExtArgs> | null
    /**
     * Filter which jasa_pengirim to delete.
     */
    where: jasa_pengirimWhereUniqueInput
  }

  /**
   * jasa_pengirim deleteMany
   */
  export type jasa_pengirimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jasa_pengirims to delete
     */
    where?: jasa_pengirimWhereInput
    /**
     * Limit how many jasa_pengirims to delete.
     */
    limit?: number
  }

  /**
   * jasa_pengirim.transaksi
   */
  export type jasa_pengirim$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    where?: transaksiWhereInput
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    cursor?: transaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * jasa_pengirim without action
   */
  export type jasa_pengirimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jasa_pengirim
     */
    select?: jasa_pengirimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jasa_pengirim
     */
    omit?: jasa_pengirimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jasa_pengirimInclude<ExtArgs> | null
  }


  /**
   * Model keranjang
   */

  export type AggregateKeranjang = {
    _count: KeranjangCountAggregateOutputType | null
    _avg: KeranjangAvgAggregateOutputType | null
    _sum: KeranjangSumAggregateOutputType | null
    _min: KeranjangMinAggregateOutputType | null
    _max: KeranjangMaxAggregateOutputType | null
  }

  export type KeranjangAvgAggregateOutputType = {
    id_keranjang: number | null
    id_user: number | null
    id_produk: number | null
    jumlah_pembelian: number | null
    total_harga: number | null
  }

  export type KeranjangSumAggregateOutputType = {
    id_keranjang: number | null
    id_user: number | null
    id_produk: number | null
    jumlah_pembelian: number | null
    total_harga: number | null
  }

  export type KeranjangMinAggregateOutputType = {
    id_keranjang: number | null
    id_user: number | null
    id_produk: number | null
    jumlah_pembelian: number | null
    total_harga: number | null
  }

  export type KeranjangMaxAggregateOutputType = {
    id_keranjang: number | null
    id_user: number | null
    id_produk: number | null
    jumlah_pembelian: number | null
    total_harga: number | null
  }

  export type KeranjangCountAggregateOutputType = {
    id_keranjang: number
    id_user: number
    id_produk: number
    jumlah_pembelian: number
    total_harga: number
    _all: number
  }


  export type KeranjangAvgAggregateInputType = {
    id_keranjang?: true
    id_user?: true
    id_produk?: true
    jumlah_pembelian?: true
    total_harga?: true
  }

  export type KeranjangSumAggregateInputType = {
    id_keranjang?: true
    id_user?: true
    id_produk?: true
    jumlah_pembelian?: true
    total_harga?: true
  }

  export type KeranjangMinAggregateInputType = {
    id_keranjang?: true
    id_user?: true
    id_produk?: true
    jumlah_pembelian?: true
    total_harga?: true
  }

  export type KeranjangMaxAggregateInputType = {
    id_keranjang?: true
    id_user?: true
    id_produk?: true
    jumlah_pembelian?: true
    total_harga?: true
  }

  export type KeranjangCountAggregateInputType = {
    id_keranjang?: true
    id_user?: true
    id_produk?: true
    jumlah_pembelian?: true
    total_harga?: true
    _all?: true
  }

  export type KeranjangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which keranjang to aggregate.
     */
    where?: keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keranjangs to fetch.
     */
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned keranjangs
    **/
    _count?: true | KeranjangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeranjangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeranjangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeranjangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeranjangMaxAggregateInputType
  }

  export type GetKeranjangAggregateType<T extends KeranjangAggregateArgs> = {
        [P in keyof T & keyof AggregateKeranjang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeranjang[P]>
      : GetScalarType<T[P], AggregateKeranjang[P]>
  }




  export type keranjangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: keranjangWhereInput
    orderBy?: keranjangOrderByWithAggregationInput | keranjangOrderByWithAggregationInput[]
    by: KeranjangScalarFieldEnum[] | KeranjangScalarFieldEnum
    having?: keranjangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeranjangCountAggregateInputType | true
    _avg?: KeranjangAvgAggregateInputType
    _sum?: KeranjangSumAggregateInputType
    _min?: KeranjangMinAggregateInputType
    _max?: KeranjangMaxAggregateInputType
  }

  export type KeranjangGroupByOutputType = {
    id_keranjang: number
    id_user: number
    id_produk: number
    jumlah_pembelian: number
    total_harga: number
    _count: KeranjangCountAggregateOutputType | null
    _avg: KeranjangAvgAggregateOutputType | null
    _sum: KeranjangSumAggregateOutputType | null
    _min: KeranjangMinAggregateOutputType | null
    _max: KeranjangMaxAggregateOutputType | null
  }

  type GetKeranjangGroupByPayload<T extends keranjangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeranjangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeranjangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeranjangGroupByOutputType[P]>
            : GetScalarType<T[P], KeranjangGroupByOutputType[P]>
        }
      >
    >


  export type keranjangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_keranjang?: boolean
    id_user?: boolean
    id_produk?: boolean
    jumlah_pembelian?: boolean
    total_harga?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keranjang"]>



  export type keranjangSelectScalar = {
    id_keranjang?: boolean
    id_user?: boolean
    id_produk?: boolean
    jumlah_pembelian?: boolean
    total_harga?: boolean
  }

  export type keranjangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_keranjang" | "id_user" | "id_produk" | "jumlah_pembelian" | "total_harga", ExtArgs["result"]["keranjang"]>
  export type keranjangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }

  export type $keranjangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "keranjang"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      produk: Prisma.$produkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_keranjang: number
      id_user: number
      id_produk: number
      jumlah_pembelian: number
      total_harga: number
    }, ExtArgs["result"]["keranjang"]>
    composites: {}
  }

  type keranjangGetPayload<S extends boolean | null | undefined | keranjangDefaultArgs> = $Result.GetResult<Prisma.$keranjangPayload, S>

  type keranjangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<keranjangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeranjangCountAggregateInputType | true
    }

  export interface keranjangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['keranjang'], meta: { name: 'keranjang' } }
    /**
     * Find zero or one Keranjang that matches the filter.
     * @param {keranjangFindUniqueArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends keranjangFindUniqueArgs>(args: SelectSubset<T, keranjangFindUniqueArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keranjang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {keranjangFindUniqueOrThrowArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends keranjangFindUniqueOrThrowArgs>(args: SelectSubset<T, keranjangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keranjang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangFindFirstArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends keranjangFindFirstArgs>(args?: SelectSubset<T, keranjangFindFirstArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keranjang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangFindFirstOrThrowArgs} args - Arguments to find a Keranjang
     * @example
     * // Get one Keranjang
     * const keranjang = await prisma.keranjang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends keranjangFindFirstOrThrowArgs>(args?: SelectSubset<T, keranjangFindFirstOrThrowArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keranjangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keranjangs
     * const keranjangs = await prisma.keranjang.findMany()
     * 
     * // Get first 10 Keranjangs
     * const keranjangs = await prisma.keranjang.findMany({ take: 10 })
     * 
     * // Only select the `id_keranjang`
     * const keranjangWithId_keranjangOnly = await prisma.keranjang.findMany({ select: { id_keranjang: true } })
     * 
     */
    findMany<T extends keranjangFindManyArgs>(args?: SelectSubset<T, keranjangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keranjang.
     * @param {keranjangCreateArgs} args - Arguments to create a Keranjang.
     * @example
     * // Create one Keranjang
     * const Keranjang = await prisma.keranjang.create({
     *   data: {
     *     // ... data to create a Keranjang
     *   }
     * })
     * 
     */
    create<T extends keranjangCreateArgs>(args: SelectSubset<T, keranjangCreateArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keranjangs.
     * @param {keranjangCreateManyArgs} args - Arguments to create many Keranjangs.
     * @example
     * // Create many Keranjangs
     * const keranjang = await prisma.keranjang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends keranjangCreateManyArgs>(args?: SelectSubset<T, keranjangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Keranjang.
     * @param {keranjangDeleteArgs} args - Arguments to delete one Keranjang.
     * @example
     * // Delete one Keranjang
     * const Keranjang = await prisma.keranjang.delete({
     *   where: {
     *     // ... filter to delete one Keranjang
     *   }
     * })
     * 
     */
    delete<T extends keranjangDeleteArgs>(args: SelectSubset<T, keranjangDeleteArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keranjang.
     * @param {keranjangUpdateArgs} args - Arguments to update one Keranjang.
     * @example
     * // Update one Keranjang
     * const keranjang = await prisma.keranjang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends keranjangUpdateArgs>(args: SelectSubset<T, keranjangUpdateArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keranjangs.
     * @param {keranjangDeleteManyArgs} args - Arguments to filter Keranjangs to delete.
     * @example
     * // Delete a few Keranjangs
     * const { count } = await prisma.keranjang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends keranjangDeleteManyArgs>(args?: SelectSubset<T, keranjangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keranjangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keranjangs
     * const keranjang = await prisma.keranjang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends keranjangUpdateManyArgs>(args: SelectSubset<T, keranjangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Keranjang.
     * @param {keranjangUpsertArgs} args - Arguments to update or create a Keranjang.
     * @example
     * // Update or create a Keranjang
     * const keranjang = await prisma.keranjang.upsert({
     *   create: {
     *     // ... data to create a Keranjang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keranjang we want to update
     *   }
     * })
     */
    upsert<T extends keranjangUpsertArgs>(args: SelectSubset<T, keranjangUpsertArgs<ExtArgs>>): Prisma__keranjangClient<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keranjangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangCountArgs} args - Arguments to filter Keranjangs to count.
     * @example
     * // Count the number of Keranjangs
     * const count = await prisma.keranjang.count({
     *   where: {
     *     // ... the filter for the Keranjangs we want to count
     *   }
     * })
    **/
    count<T extends keranjangCountArgs>(
      args?: Subset<T, keranjangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeranjangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keranjang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeranjangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeranjangAggregateArgs>(args: Subset<T, KeranjangAggregateArgs>): Prisma.PrismaPromise<GetKeranjangAggregateType<T>>

    /**
     * Group by Keranjang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {keranjangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends keranjangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: keranjangGroupByArgs['orderBy'] }
        : { orderBy?: keranjangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, keranjangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeranjangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the keranjang model
   */
  readonly fields: keranjangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for keranjang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__keranjangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produk<T extends produkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produkDefaultArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the keranjang model
   */
  interface keranjangFieldRefs {
    readonly id_keranjang: FieldRef<"keranjang", 'Int'>
    readonly id_user: FieldRef<"keranjang", 'Int'>
    readonly id_produk: FieldRef<"keranjang", 'Int'>
    readonly jumlah_pembelian: FieldRef<"keranjang", 'Int'>
    readonly total_harga: FieldRef<"keranjang", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * keranjang findUnique
   */
  export type keranjangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjang to fetch.
     */
    where: keranjangWhereUniqueInput
  }

  /**
   * keranjang findUniqueOrThrow
   */
  export type keranjangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjang to fetch.
     */
    where: keranjangWhereUniqueInput
  }

  /**
   * keranjang findFirst
   */
  export type keranjangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjang to fetch.
     */
    where?: keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keranjangs to fetch.
     */
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for keranjangs.
     */
    cursor?: keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of keranjangs.
     */
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * keranjang findFirstOrThrow
   */
  export type keranjangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjang to fetch.
     */
    where?: keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keranjangs to fetch.
     */
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for keranjangs.
     */
    cursor?: keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keranjangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of keranjangs.
     */
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * keranjang findMany
   */
  export type keranjangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter, which keranjangs to fetch.
     */
    where?: keranjangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of keranjangs to fetch.
     */
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing keranjangs.
     */
    cursor?: keranjangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` keranjangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` keranjangs.
     */
    skip?: number
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * keranjang create
   */
  export type keranjangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * The data needed to create a keranjang.
     */
    data: XOR<keranjangCreateInput, keranjangUncheckedCreateInput>
  }

  /**
   * keranjang createMany
   */
  export type keranjangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many keranjangs.
     */
    data: keranjangCreateManyInput | keranjangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * keranjang update
   */
  export type keranjangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * The data needed to update a keranjang.
     */
    data: XOR<keranjangUpdateInput, keranjangUncheckedUpdateInput>
    /**
     * Choose, which keranjang to update.
     */
    where: keranjangWhereUniqueInput
  }

  /**
   * keranjang updateMany
   */
  export type keranjangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update keranjangs.
     */
    data: XOR<keranjangUpdateManyMutationInput, keranjangUncheckedUpdateManyInput>
    /**
     * Filter which keranjangs to update
     */
    where?: keranjangWhereInput
    /**
     * Limit how many keranjangs to update.
     */
    limit?: number
  }

  /**
   * keranjang upsert
   */
  export type keranjangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * The filter to search for the keranjang to update in case it exists.
     */
    where: keranjangWhereUniqueInput
    /**
     * In case the keranjang found by the `where` argument doesn't exist, create a new keranjang with this data.
     */
    create: XOR<keranjangCreateInput, keranjangUncheckedCreateInput>
    /**
     * In case the keranjang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<keranjangUpdateInput, keranjangUncheckedUpdateInput>
  }

  /**
   * keranjang delete
   */
  export type keranjangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    /**
     * Filter which keranjang to delete.
     */
    where: keranjangWhereUniqueInput
  }

  /**
   * keranjang deleteMany
   */
  export type keranjangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which keranjangs to delete
     */
    where?: keranjangWhereInput
    /**
     * Limit how many keranjangs to delete.
     */
    limit?: number
  }

  /**
   * keranjang without action
   */
  export type keranjangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
  }


  /**
   * Model produk
   */

  export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  export type ProdukAvgAggregateOutputType = {
    id_produk: number | null
    stok_kg: number | null
    harga_kg: number | null
  }

  export type ProdukSumAggregateOutputType = {
    id_produk: number | null
    stok_kg: number | null
    harga_kg: number | null
  }

  export type ProdukMinAggregateOutputType = {
    id_produk: number | null
    nama_produk: string | null
    stok_kg: number | null
    harga_kg: number | null
    deskripsi: string | null
    status: string | null
    gambar: string | null
  }

  export type ProdukMaxAggregateOutputType = {
    id_produk: number | null
    nama_produk: string | null
    stok_kg: number | null
    harga_kg: number | null
    deskripsi: string | null
    status: string | null
    gambar: string | null
  }

  export type ProdukCountAggregateOutputType = {
    id_produk: number
    nama_produk: number
    stok_kg: number
    harga_kg: number
    deskripsi: number
    status: number
    gambar: number
    _all: number
  }


  export type ProdukAvgAggregateInputType = {
    id_produk?: true
    stok_kg?: true
    harga_kg?: true
  }

  export type ProdukSumAggregateInputType = {
    id_produk?: true
    stok_kg?: true
    harga_kg?: true
  }

  export type ProdukMinAggregateInputType = {
    id_produk?: true
    nama_produk?: true
    stok_kg?: true
    harga_kg?: true
    deskripsi?: true
    status?: true
    gambar?: true
  }

  export type ProdukMaxAggregateInputType = {
    id_produk?: true
    nama_produk?: true
    stok_kg?: true
    harga_kg?: true
    deskripsi?: true
    status?: true
    gambar?: true
  }

  export type ProdukCountAggregateInputType = {
    id_produk?: true
    nama_produk?: true
    stok_kg?: true
    harga_kg?: true
    deskripsi?: true
    status?: true
    gambar?: true
    _all?: true
  }

  export type ProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produk to aggregate.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produks
    **/
    _count?: true | ProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType
  }

  export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduk[P]>
      : GetScalarType<T[P], AggregateProduk[P]>
  }




  export type produkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkWhereInput
    orderBy?: produkOrderByWithAggregationInput | produkOrderByWithAggregationInput[]
    by: ProdukScalarFieldEnum[] | ProdukScalarFieldEnum
    having?: produkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukCountAggregateInputType | true
    _avg?: ProdukAvgAggregateInputType
    _sum?: ProdukSumAggregateInputType
    _min?: ProdukMinAggregateInputType
    _max?: ProdukMaxAggregateInputType
  }

  export type ProdukGroupByOutputType = {
    id_produk: number
    nama_produk: string
    stok_kg: number | null
    harga_kg: number
    deskripsi: string | null
    status: string | null
    gambar: string | null
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  type GetProdukGroupByPayload<T extends produkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGroupByOutputType[P]>
        }
      >
    >


  export type produkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produk?: boolean
    nama_produk?: boolean
    stok_kg?: boolean
    harga_kg?: boolean
    deskripsi?: boolean
    status?: boolean
    gambar?: boolean
    keranjang?: boolean | produk$keranjangArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>



  export type produkSelectScalar = {
    id_produk?: boolean
    nama_produk?: boolean
    stok_kg?: boolean
    harga_kg?: boolean
    deskripsi?: boolean
    status?: boolean
    gambar?: boolean
  }

  export type produkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_produk" | "nama_produk" | "stok_kg" | "harga_kg" | "deskripsi" | "status" | "gambar", ExtArgs["result"]["produk"]>
  export type produkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjang?: boolean | produk$keranjangArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $produkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produk"
    objects: {
      keranjang: Prisma.$keranjangPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_produk: number
      nama_produk: string
      stok_kg: number | null
      harga_kg: number
      deskripsi: string | null
      status: string | null
      gambar: string | null
    }, ExtArgs["result"]["produk"]>
    composites: {}
  }

  type produkGetPayload<S extends boolean | null | undefined | produkDefaultArgs> = $Result.GetResult<Prisma.$produkPayload, S>

  type produkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukCountAggregateInputType | true
    }

  export interface produkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produk'], meta: { name: 'produk' } }
    /**
     * Find zero or one Produk that matches the filter.
     * @param {produkFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produkFindUniqueArgs>(args: SelectSubset<T, produkFindUniqueArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produkFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produkFindUniqueOrThrowArgs>(args: SelectSubset<T, produkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produkFindFirstArgs>(args?: SelectSubset<T, produkFindFirstArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produkFindFirstOrThrowArgs>(args?: SelectSubset<T, produkFindFirstOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     * 
     * // Only select the `id_produk`
     * const produkWithId_produkOnly = await prisma.produk.findMany({ select: { id_produk: true } })
     * 
     */
    findMany<T extends produkFindManyArgs>(args?: SelectSubset<T, produkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produk.
     * @param {produkCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     * 
     */
    create<T extends produkCreateArgs>(args: SelectSubset<T, produkCreateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produks.
     * @param {produkCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produkCreateManyArgs>(args?: SelectSubset<T, produkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produk.
     * @param {produkDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     * 
     */
    delete<T extends produkDeleteArgs>(args: SelectSubset<T, produkDeleteArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produk.
     * @param {produkUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produkUpdateArgs>(args: SelectSubset<T, produkUpdateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produks.
     * @param {produkDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produkDeleteManyArgs>(args?: SelectSubset<T, produkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produkUpdateManyArgs>(args: SelectSubset<T, produkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produk.
     * @param {produkUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
     */
    upsert<T extends produkUpsertArgs>(args: SelectSubset<T, produkUpsertArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends produkCountArgs>(
      args?: Subset<T, produkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdukAggregateArgs>(args: Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>

    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends produkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produkGroupByArgs['orderBy'] }
        : { orderBy?: produkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, produkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produk model
   */
  readonly fields: produkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keranjang<T extends produk$keranjangArgs<ExtArgs> = {}>(args?: Subset<T, produk$keranjangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the produk model
   */
  interface produkFieldRefs {
    readonly id_produk: FieldRef<"produk", 'Int'>
    readonly nama_produk: FieldRef<"produk", 'String'>
    readonly stok_kg: FieldRef<"produk", 'Int'>
    readonly harga_kg: FieldRef<"produk", 'Int'>
    readonly deskripsi: FieldRef<"produk", 'String'>
    readonly status: FieldRef<"produk", 'String'>
    readonly gambar: FieldRef<"produk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * produk findUnique
   */
  export type produkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findUniqueOrThrow
   */
  export type produkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findFirst
   */
  export type produkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findFirstOrThrow
   */
  export type produkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findMany
   */
  export type produkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produks to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk create
   */
  export type produkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The data needed to create a produk.
     */
    data: XOR<produkCreateInput, produkUncheckedCreateInput>
  }

  /**
   * produk createMany
   */
  export type produkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produks.
     */
    data: produkCreateManyInput | produkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produk update
   */
  export type produkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The data needed to update a produk.
     */
    data: XOR<produkUpdateInput, produkUncheckedUpdateInput>
    /**
     * Choose, which produk to update.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk updateMany
   */
  export type produkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produks.
     */
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyInput>
    /**
     * Filter which produks to update
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to update.
     */
    limit?: number
  }

  /**
   * produk upsert
   */
  export type produkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The filter to search for the produk to update in case it exists.
     */
    where: produkWhereUniqueInput
    /**
     * In case the produk found by the `where` argument doesn't exist, create a new produk with this data.
     */
    create: XOR<produkCreateInput, produkUncheckedCreateInput>
    /**
     * In case the produk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produkUpdateInput, produkUncheckedUpdateInput>
  }

  /**
   * produk delete
   */
  export type produkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter which produk to delete.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk deleteMany
   */
  export type produkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produks to delete
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to delete.
     */
    limit?: number
  }

  /**
   * produk.keranjang
   */
  export type produk$keranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    where?: keranjangWhereInput
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    cursor?: keranjangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * produk without action
   */
  export type produkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
  }


  /**
   * Model transaksi
   */

  export type AggregateTransaksi = {
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  export type TransaksiAvgAggregateOutputType = {
    id_transaksi: number | null
    id_user: number | null
    id_pengiriman: number | null
  }

  export type TransaksiSumAggregateOutputType = {
    id_transaksi: number | null
    id_user: number | null
    id_pengiriman: number | null
  }

  export type TransaksiMinAggregateOutputType = {
    id_transaksi: number | null
    id_user: number | null
    id_pengiriman: number | null
    metode_transaksi: $Enums.transaksi_metode_transaksi | null
    tgl_transaksi: Date | null
    status_transaksi: string | null
  }

  export type TransaksiMaxAggregateOutputType = {
    id_transaksi: number | null
    id_user: number | null
    id_pengiriman: number | null
    metode_transaksi: $Enums.transaksi_metode_transaksi | null
    tgl_transaksi: Date | null
    status_transaksi: string | null
  }

  export type TransaksiCountAggregateOutputType = {
    id_transaksi: number
    id_user: number
    id_pengiriman: number
    metode_transaksi: number
    tgl_transaksi: number
    status_transaksi: number
    _all: number
  }


  export type TransaksiAvgAggregateInputType = {
    id_transaksi?: true
    id_user?: true
    id_pengiriman?: true
  }

  export type TransaksiSumAggregateInputType = {
    id_transaksi?: true
    id_user?: true
    id_pengiriman?: true
  }

  export type TransaksiMinAggregateInputType = {
    id_transaksi?: true
    id_user?: true
    id_pengiriman?: true
    metode_transaksi?: true
    tgl_transaksi?: true
    status_transaksi?: true
  }

  export type TransaksiMaxAggregateInputType = {
    id_transaksi?: true
    id_user?: true
    id_pengiriman?: true
    metode_transaksi?: true
    tgl_transaksi?: true
    status_transaksi?: true
  }

  export type TransaksiCountAggregateInputType = {
    id_transaksi?: true
    id_user?: true
    id_pengiriman?: true
    metode_transaksi?: true
    tgl_transaksi?: true
    status_transaksi?: true
    _all?: true
  }

  export type TransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksi to aggregate.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaksis
    **/
    _count?: true | TransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiMaxAggregateInputType
  }

  export type GetTransaksiAggregateType<T extends TransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksi[P]>
      : GetScalarType<T[P], AggregateTransaksi[P]>
  }




  export type transaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksiWhereInput
    orderBy?: transaksiOrderByWithAggregationInput | transaksiOrderByWithAggregationInput[]
    by: TransaksiScalarFieldEnum[] | TransaksiScalarFieldEnum
    having?: transaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiCountAggregateInputType | true
    _avg?: TransaksiAvgAggregateInputType
    _sum?: TransaksiSumAggregateInputType
    _min?: TransaksiMinAggregateInputType
    _max?: TransaksiMaxAggregateInputType
  }

  export type TransaksiGroupByOutputType = {
    id_transaksi: number
    id_user: number
    id_pengiriman: number
    metode_transaksi: $Enums.transaksi_metode_transaksi | null
    tgl_transaksi: Date | null
    status_transaksi: string | null
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  type GetTransaksiGroupByPayload<T extends transaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
        }
      >
    >


  export type transaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_transaksi?: boolean
    id_user?: boolean
    id_pengiriman?: boolean
    metode_transaksi?: boolean
    tgl_transaksi?: boolean
    status_transaksi?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    jasa_pengirim?: boolean | jasa_pengirimDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>



  export type transaksiSelectScalar = {
    id_transaksi?: boolean
    id_user?: boolean
    id_pengiriman?: boolean
    metode_transaksi?: boolean
    tgl_transaksi?: boolean
    status_transaksi?: boolean
  }

  export type transaksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_transaksi" | "id_user" | "id_pengiriman" | "metode_transaksi" | "tgl_transaksi" | "status_transaksi", ExtArgs["result"]["transaksi"]>
  export type transaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    jasa_pengirim?: boolean | jasa_pengirimDefaultArgs<ExtArgs>
  }

  export type $transaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaksi"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      jasa_pengirim: Prisma.$jasa_pengirimPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_transaksi: number
      id_user: number
      id_pengiriman: number
      metode_transaksi: $Enums.transaksi_metode_transaksi | null
      tgl_transaksi: Date | null
      status_transaksi: string | null
    }, ExtArgs["result"]["transaksi"]>
    composites: {}
  }

  type transaksiGetPayload<S extends boolean | null | undefined | transaksiDefaultArgs> = $Result.GetResult<Prisma.$transaksiPayload, S>

  type transaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaksiCountAggregateInputType | true
    }

  export interface transaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaksi'], meta: { name: 'transaksi' } }
    /**
     * Find zero or one Transaksi that matches the filter.
     * @param {transaksiFindUniqueArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaksiFindUniqueArgs>(args: SelectSubset<T, transaksiFindUniqueArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaksiFindUniqueOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, transaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindFirstArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaksiFindFirstArgs>(args?: SelectSubset<T, transaksiFindFirstArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindFirstOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, transaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaksis
     * const transaksis = await prisma.transaksi.findMany()
     * 
     * // Get first 10 Transaksis
     * const transaksis = await prisma.transaksi.findMany({ take: 10 })
     * 
     * // Only select the `id_transaksi`
     * const transaksiWithId_transaksiOnly = await prisma.transaksi.findMany({ select: { id_transaksi: true } })
     * 
     */
    findMany<T extends transaksiFindManyArgs>(args?: SelectSubset<T, transaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaksi.
     * @param {transaksiCreateArgs} args - Arguments to create a Transaksi.
     * @example
     * // Create one Transaksi
     * const Transaksi = await prisma.transaksi.create({
     *   data: {
     *     // ... data to create a Transaksi
     *   }
     * })
     * 
     */
    create<T extends transaksiCreateArgs>(args: SelectSubset<T, transaksiCreateArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaksis.
     * @param {transaksiCreateManyArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaksiCreateManyArgs>(args?: SelectSubset<T, transaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaksi.
     * @param {transaksiDeleteArgs} args - Arguments to delete one Transaksi.
     * @example
     * // Delete one Transaksi
     * const Transaksi = await prisma.transaksi.delete({
     *   where: {
     *     // ... filter to delete one Transaksi
     *   }
     * })
     * 
     */
    delete<T extends transaksiDeleteArgs>(args: SelectSubset<T, transaksiDeleteArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaksi.
     * @param {transaksiUpdateArgs} args - Arguments to update one Transaksi.
     * @example
     * // Update one Transaksi
     * const transaksi = await prisma.transaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaksiUpdateArgs>(args: SelectSubset<T, transaksiUpdateArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaksis.
     * @param {transaksiDeleteManyArgs} args - Arguments to filter Transaksis to delete.
     * @example
     * // Delete a few Transaksis
     * const { count } = await prisma.transaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaksiDeleteManyArgs>(args?: SelectSubset<T, transaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaksiUpdateManyArgs>(args: SelectSubset<T, transaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaksi.
     * @param {transaksiUpsertArgs} args - Arguments to update or create a Transaksi.
     * @example
     * // Update or create a Transaksi
     * const transaksi = await prisma.transaksi.upsert({
     *   create: {
     *     // ... data to create a Transaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaksi we want to update
     *   }
     * })
     */
    upsert<T extends transaksiUpsertArgs>(args: SelectSubset<T, transaksiUpsertArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiCountArgs} args - Arguments to filter Transaksis to count.
     * @example
     * // Count the number of Transaksis
     * const count = await prisma.transaksi.count({
     *   where: {
     *     // ... the filter for the Transaksis we want to count
     *   }
     * })
    **/
    count<T extends transaksiCountArgs>(
      args?: Subset<T, transaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransaksiAggregateArgs>(args: Subset<T, TransaksiAggregateArgs>): Prisma.PrismaPromise<GetTransaksiAggregateType<T>>

    /**
     * Group by Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaksiGroupByArgs['orderBy'] }
        : { orderBy?: transaksiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaksi model
   */
  readonly fields: transaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jasa_pengirim<T extends jasa_pengirimDefaultArgs<ExtArgs> = {}>(args?: Subset<T, jasa_pengirimDefaultArgs<ExtArgs>>): Prisma__jasa_pengirimClient<$Result.GetResult<Prisma.$jasa_pengirimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaksi model
   */
  interface transaksiFieldRefs {
    readonly id_transaksi: FieldRef<"transaksi", 'Int'>
    readonly id_user: FieldRef<"transaksi", 'Int'>
    readonly id_pengiriman: FieldRef<"transaksi", 'Int'>
    readonly metode_transaksi: FieldRef<"transaksi", 'transaksi_metode_transaksi'>
    readonly tgl_transaksi: FieldRef<"transaksi", 'DateTime'>
    readonly status_transaksi: FieldRef<"transaksi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transaksi findUnique
   */
  export type transaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi findUniqueOrThrow
   */
  export type transaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi findFirst
   */
  export type transaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi findFirstOrThrow
   */
  export type transaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi findMany
   */
  export type transaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksis to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi create
   */
  export type transaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a transaksi.
     */
    data: XOR<transaksiCreateInput, transaksiUncheckedCreateInput>
  }

  /**
   * transaksi createMany
   */
  export type transaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaksis.
     */
    data: transaksiCreateManyInput | transaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaksi update
   */
  export type transaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a transaksi.
     */
    data: XOR<transaksiUpdateInput, transaksiUncheckedUpdateInput>
    /**
     * Choose, which transaksi to update.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi updateMany
   */
  export type transaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaksis.
     */
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyInput>
    /**
     * Filter which transaksis to update
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to update.
     */
    limit?: number
  }

  /**
   * transaksi upsert
   */
  export type transaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the transaksi to update in case it exists.
     */
    where: transaksiWhereUniqueInput
    /**
     * In case the transaksi found by the `where` argument doesn't exist, create a new transaksi with this data.
     */
    create: XOR<transaksiCreateInput, transaksiUncheckedCreateInput>
    /**
     * In case the transaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaksiUpdateInput, transaksiUncheckedUpdateInput>
  }

  /**
   * transaksi delete
   */
  export type transaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter which transaksi to delete.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi deleteMany
   */
  export type transaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksis to delete
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to delete.
     */
    limit?: number
  }

  /**
   * transaksi without action
   */
  export type transaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id_user: number | null
  }

  export type UsersSumAggregateOutputType = {
    id_user: number | null
  }

  export type UsersMinAggregateOutputType = {
    id_user: number | null
    username: string | null
    password: string | null
    token: string | null
    email: string | null
    alamat: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id_user: number | null
    username: string | null
    password: string | null
    token: string | null
    email: string | null
    alamat: string | null
  }

  export type UsersCountAggregateOutputType = {
    id_user: number
    username: number
    password: number
    token: number
    email: number
    alamat: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id_user?: true
  }

  export type UsersSumAggregateInputType = {
    id_user?: true
  }

  export type UsersMinAggregateInputType = {
    id_user?: true
    username?: true
    password?: true
    token?: true
    email?: true
    alamat?: true
  }

  export type UsersMaxAggregateInputType = {
    id_user?: true
    username?: true
    password?: true
    token?: true
    email?: true
    alamat?: true
  }

  export type UsersCountAggregateInputType = {
    id_user?: true
    username?: true
    password?: true
    token?: true
    email?: true
    alamat?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id_user: number
    username: string
    password: string
    token: string | null
    email: string
    alamat: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    username?: boolean
    password?: boolean
    token?: boolean
    email?: boolean
    alamat?: boolean
    keranjang?: boolean | users$keranjangArgs<ExtArgs>
    transaksi?: boolean | users$transaksiArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id_user?: boolean
    username?: boolean
    password?: boolean
    token?: boolean
    email?: boolean
    alamat?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "username" | "password" | "token" | "email" | "alamat", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keranjang?: boolean | users$keranjangArgs<ExtArgs>
    transaksi?: boolean | users$transaksiArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      keranjang: Prisma.$keranjangPayload<ExtArgs>[]
      transaksi: Prisma.$transaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      username: string
      password: string
      token: string | null
      email: string
      alamat: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const usersWithId_userOnly = await prisma.users.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keranjang<T extends users$keranjangArgs<ExtArgs> = {}>(args?: Subset<T, users$keranjangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$keranjangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaksi<T extends users$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, users$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id_user: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly token: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly alamat: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.keranjang
   */
  export type users$keranjangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the keranjang
     */
    select?: keranjangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the keranjang
     */
    omit?: keranjangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: keranjangInclude<ExtArgs> | null
    where?: keranjangWhereInput
    orderBy?: keranjangOrderByWithRelationInput | keranjangOrderByWithRelationInput[]
    cursor?: keranjangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeranjangScalarFieldEnum | KeranjangScalarFieldEnum[]
  }

  /**
   * users.transaksi
   */
  export type users$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    where?: transaksiWhereInput
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    cursor?: transaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Jasa_pengirimScalarFieldEnum: {
    id_pengiriman: 'id_pengiriman',
    jasa_kirim: 'jasa_kirim',
    harga_pengiriman: 'harga_pengiriman'
  };

  export type Jasa_pengirimScalarFieldEnum = (typeof Jasa_pengirimScalarFieldEnum)[keyof typeof Jasa_pengirimScalarFieldEnum]


  export const KeranjangScalarFieldEnum: {
    id_keranjang: 'id_keranjang',
    id_user: 'id_user',
    id_produk: 'id_produk',
    jumlah_pembelian: 'jumlah_pembelian',
    total_harga: 'total_harga'
  };

  export type KeranjangScalarFieldEnum = (typeof KeranjangScalarFieldEnum)[keyof typeof KeranjangScalarFieldEnum]


  export const ProdukScalarFieldEnum: {
    id_produk: 'id_produk',
    nama_produk: 'nama_produk',
    stok_kg: 'stok_kg',
    harga_kg: 'harga_kg',
    deskripsi: 'deskripsi',
    status: 'status',
    gambar: 'gambar'
  };

  export type ProdukScalarFieldEnum = (typeof ProdukScalarFieldEnum)[keyof typeof ProdukScalarFieldEnum]


  export const TransaksiScalarFieldEnum: {
    id_transaksi: 'id_transaksi',
    id_user: 'id_user',
    id_pengiriman: 'id_pengiriman',
    metode_transaksi: 'metode_transaksi',
    tgl_transaksi: 'tgl_transaksi',
    status_transaksi: 'status_transaksi'
  };

  export type TransaksiScalarFieldEnum = (typeof TransaksiScalarFieldEnum)[keyof typeof TransaksiScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id_user: 'id_user',
    username: 'username',
    password: 'password',
    token: 'token',
    email: 'email',
    alamat: 'alamat'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const jasa_pengirimOrderByRelevanceFieldEnum: {
    jasa_kirim: 'jasa_kirim'
  };

  export type jasa_pengirimOrderByRelevanceFieldEnum = (typeof jasa_pengirimOrderByRelevanceFieldEnum)[keyof typeof jasa_pengirimOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const produkOrderByRelevanceFieldEnum: {
    nama_produk: 'nama_produk',
    deskripsi: 'deskripsi',
    status: 'status',
    gambar: 'gambar'
  };

  export type produkOrderByRelevanceFieldEnum = (typeof produkOrderByRelevanceFieldEnum)[keyof typeof produkOrderByRelevanceFieldEnum]


  export const transaksiOrderByRelevanceFieldEnum: {
    status_transaksi: 'status_transaksi'
  };

  export type transaksiOrderByRelevanceFieldEnum = (typeof transaksiOrderByRelevanceFieldEnum)[keyof typeof transaksiOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    token: 'token',
    email: 'email',
    alamat: 'alamat'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'transaksi_metode_transaksi'
   */
  export type Enumtransaksi_metode_transaksiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transaksi_metode_transaksi'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type jasa_pengirimWhereInput = {
    AND?: jasa_pengirimWhereInput | jasa_pengirimWhereInput[]
    OR?: jasa_pengirimWhereInput[]
    NOT?: jasa_pengirimWhereInput | jasa_pengirimWhereInput[]
    id_pengiriman?: IntFilter<"jasa_pengirim"> | number
    jasa_kirim?: StringFilter<"jasa_pengirim"> | string
    harga_pengiriman?: IntFilter<"jasa_pengirim"> | number
    transaksi?: TransaksiListRelationFilter
  }

  export type jasa_pengirimOrderByWithRelationInput = {
    id_pengiriman?: SortOrder
    jasa_kirim?: SortOrder
    harga_pengiriman?: SortOrder
    transaksi?: transaksiOrderByRelationAggregateInput
    _relevance?: jasa_pengirimOrderByRelevanceInput
  }

  export type jasa_pengirimWhereUniqueInput = Prisma.AtLeast<{
    id_pengiriman?: number
    AND?: jasa_pengirimWhereInput | jasa_pengirimWhereInput[]
    OR?: jasa_pengirimWhereInput[]
    NOT?: jasa_pengirimWhereInput | jasa_pengirimWhereInput[]
    jasa_kirim?: StringFilter<"jasa_pengirim"> | string
    harga_pengiriman?: IntFilter<"jasa_pengirim"> | number
    transaksi?: TransaksiListRelationFilter
  }, "id_pengiriman">

  export type jasa_pengirimOrderByWithAggregationInput = {
    id_pengiriman?: SortOrder
    jasa_kirim?: SortOrder
    harga_pengiriman?: SortOrder
    _count?: jasa_pengirimCountOrderByAggregateInput
    _avg?: jasa_pengirimAvgOrderByAggregateInput
    _max?: jasa_pengirimMaxOrderByAggregateInput
    _min?: jasa_pengirimMinOrderByAggregateInput
    _sum?: jasa_pengirimSumOrderByAggregateInput
  }

  export type jasa_pengirimScalarWhereWithAggregatesInput = {
    AND?: jasa_pengirimScalarWhereWithAggregatesInput | jasa_pengirimScalarWhereWithAggregatesInput[]
    OR?: jasa_pengirimScalarWhereWithAggregatesInput[]
    NOT?: jasa_pengirimScalarWhereWithAggregatesInput | jasa_pengirimScalarWhereWithAggregatesInput[]
    id_pengiriman?: IntWithAggregatesFilter<"jasa_pengirim"> | number
    jasa_kirim?: StringWithAggregatesFilter<"jasa_pengirim"> | string
    harga_pengiriman?: IntWithAggregatesFilter<"jasa_pengirim"> | number
  }

  export type keranjangWhereInput = {
    AND?: keranjangWhereInput | keranjangWhereInput[]
    OR?: keranjangWhereInput[]
    NOT?: keranjangWhereInput | keranjangWhereInput[]
    id_keranjang?: IntFilter<"keranjang"> | number
    id_user?: IntFilter<"keranjang"> | number
    id_produk?: IntFilter<"keranjang"> | number
    jumlah_pembelian?: IntFilter<"keranjang"> | number
    total_harga?: IntFilter<"keranjang"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }

  export type keranjangOrderByWithRelationInput = {
    id_keranjang?: SortOrder
    id_user?: SortOrder
    id_produk?: SortOrder
    jumlah_pembelian?: SortOrder
    total_harga?: SortOrder
    users?: usersOrderByWithRelationInput
    produk?: produkOrderByWithRelationInput
  }

  export type keranjangWhereUniqueInput = Prisma.AtLeast<{
    id_keranjang?: number
    AND?: keranjangWhereInput | keranjangWhereInput[]
    OR?: keranjangWhereInput[]
    NOT?: keranjangWhereInput | keranjangWhereInput[]
    id_user?: IntFilter<"keranjang"> | number
    id_produk?: IntFilter<"keranjang"> | number
    jumlah_pembelian?: IntFilter<"keranjang"> | number
    total_harga?: IntFilter<"keranjang"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }, "id_keranjang">

  export type keranjangOrderByWithAggregationInput = {
    id_keranjang?: SortOrder
    id_user?: SortOrder
    id_produk?: SortOrder
    jumlah_pembelian?: SortOrder
    total_harga?: SortOrder
    _count?: keranjangCountOrderByAggregateInput
    _avg?: keranjangAvgOrderByAggregateInput
    _max?: keranjangMaxOrderByAggregateInput
    _min?: keranjangMinOrderByAggregateInput
    _sum?: keranjangSumOrderByAggregateInput
  }

  export type keranjangScalarWhereWithAggregatesInput = {
    AND?: keranjangScalarWhereWithAggregatesInput | keranjangScalarWhereWithAggregatesInput[]
    OR?: keranjangScalarWhereWithAggregatesInput[]
    NOT?: keranjangScalarWhereWithAggregatesInput | keranjangScalarWhereWithAggregatesInput[]
    id_keranjang?: IntWithAggregatesFilter<"keranjang"> | number
    id_user?: IntWithAggregatesFilter<"keranjang"> | number
    id_produk?: IntWithAggregatesFilter<"keranjang"> | number
    jumlah_pembelian?: IntWithAggregatesFilter<"keranjang"> | number
    total_harga?: IntWithAggregatesFilter<"keranjang"> | number
  }

  export type produkWhereInput = {
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    id_produk?: IntFilter<"produk"> | number
    nama_produk?: StringFilter<"produk"> | string
    stok_kg?: IntNullableFilter<"produk"> | number | null
    harga_kg?: IntFilter<"produk"> | number
    deskripsi?: StringNullableFilter<"produk"> | string | null
    status?: StringNullableFilter<"produk"> | string | null
    gambar?: StringNullableFilter<"produk"> | string | null
    keranjang?: KeranjangListRelationFilter
  }

  export type produkOrderByWithRelationInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    stok_kg?: SortOrderInput | SortOrder
    harga_kg?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    gambar?: SortOrderInput | SortOrder
    keranjang?: keranjangOrderByRelationAggregateInput
    _relevance?: produkOrderByRelevanceInput
  }

  export type produkWhereUniqueInput = Prisma.AtLeast<{
    id_produk?: number
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    nama_produk?: StringFilter<"produk"> | string
    stok_kg?: IntNullableFilter<"produk"> | number | null
    harga_kg?: IntFilter<"produk"> | number
    deskripsi?: StringNullableFilter<"produk"> | string | null
    status?: StringNullableFilter<"produk"> | string | null
    gambar?: StringNullableFilter<"produk"> | string | null
    keranjang?: KeranjangListRelationFilter
  }, "id_produk">

  export type produkOrderByWithAggregationInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    stok_kg?: SortOrderInput | SortOrder
    harga_kg?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    gambar?: SortOrderInput | SortOrder
    _count?: produkCountOrderByAggregateInput
    _avg?: produkAvgOrderByAggregateInput
    _max?: produkMaxOrderByAggregateInput
    _min?: produkMinOrderByAggregateInput
    _sum?: produkSumOrderByAggregateInput
  }

  export type produkScalarWhereWithAggregatesInput = {
    AND?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    OR?: produkScalarWhereWithAggregatesInput[]
    NOT?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    id_produk?: IntWithAggregatesFilter<"produk"> | number
    nama_produk?: StringWithAggregatesFilter<"produk"> | string
    stok_kg?: IntNullableWithAggregatesFilter<"produk"> | number | null
    harga_kg?: IntWithAggregatesFilter<"produk"> | number
    deskripsi?: StringNullableWithAggregatesFilter<"produk"> | string | null
    status?: StringNullableWithAggregatesFilter<"produk"> | string | null
    gambar?: StringNullableWithAggregatesFilter<"produk"> | string | null
  }

  export type transaksiWhereInput = {
    AND?: transaksiWhereInput | transaksiWhereInput[]
    OR?: transaksiWhereInput[]
    NOT?: transaksiWhereInput | transaksiWhereInput[]
    id_transaksi?: IntFilter<"transaksi"> | number
    id_user?: IntFilter<"transaksi"> | number
    id_pengiriman?: IntFilter<"transaksi"> | number
    metode_transaksi?: Enumtransaksi_metode_transaksiNullableFilter<"transaksi"> | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: DateTimeNullableFilter<"transaksi"> | Date | string | null
    status_transaksi?: StringNullableFilter<"transaksi"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    jasa_pengirim?: XOR<Jasa_pengirimScalarRelationFilter, jasa_pengirimWhereInput>
  }

  export type transaksiOrderByWithRelationInput = {
    id_transaksi?: SortOrder
    id_user?: SortOrder
    id_pengiriman?: SortOrder
    metode_transaksi?: SortOrderInput | SortOrder
    tgl_transaksi?: SortOrderInput | SortOrder
    status_transaksi?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    jasa_pengirim?: jasa_pengirimOrderByWithRelationInput
    _relevance?: transaksiOrderByRelevanceInput
  }

  export type transaksiWhereUniqueInput = Prisma.AtLeast<{
    id_transaksi?: number
    AND?: transaksiWhereInput | transaksiWhereInput[]
    OR?: transaksiWhereInput[]
    NOT?: transaksiWhereInput | transaksiWhereInput[]
    id_user?: IntFilter<"transaksi"> | number
    id_pengiriman?: IntFilter<"transaksi"> | number
    metode_transaksi?: Enumtransaksi_metode_transaksiNullableFilter<"transaksi"> | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: DateTimeNullableFilter<"transaksi"> | Date | string | null
    status_transaksi?: StringNullableFilter<"transaksi"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    jasa_pengirim?: XOR<Jasa_pengirimScalarRelationFilter, jasa_pengirimWhereInput>
  }, "id_transaksi">

  export type transaksiOrderByWithAggregationInput = {
    id_transaksi?: SortOrder
    id_user?: SortOrder
    id_pengiriman?: SortOrder
    metode_transaksi?: SortOrderInput | SortOrder
    tgl_transaksi?: SortOrderInput | SortOrder
    status_transaksi?: SortOrderInput | SortOrder
    _count?: transaksiCountOrderByAggregateInput
    _avg?: transaksiAvgOrderByAggregateInput
    _max?: transaksiMaxOrderByAggregateInput
    _min?: transaksiMinOrderByAggregateInput
    _sum?: transaksiSumOrderByAggregateInput
  }

  export type transaksiScalarWhereWithAggregatesInput = {
    AND?: transaksiScalarWhereWithAggregatesInput | transaksiScalarWhereWithAggregatesInput[]
    OR?: transaksiScalarWhereWithAggregatesInput[]
    NOT?: transaksiScalarWhereWithAggregatesInput | transaksiScalarWhereWithAggregatesInput[]
    id_transaksi?: IntWithAggregatesFilter<"transaksi"> | number
    id_user?: IntWithAggregatesFilter<"transaksi"> | number
    id_pengiriman?: IntWithAggregatesFilter<"transaksi"> | number
    metode_transaksi?: Enumtransaksi_metode_transaksiNullableWithAggregatesFilter<"transaksi"> | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: DateTimeNullableWithAggregatesFilter<"transaksi"> | Date | string | null
    status_transaksi?: StringNullableWithAggregatesFilter<"transaksi"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id_user?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    token?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    alamat?: StringNullableFilter<"users"> | string | null
    keranjang?: KeranjangListRelationFilter
    transaksi?: TransaksiListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id_user?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
    email?: SortOrder
    alamat?: SortOrderInput | SortOrder
    keranjang?: keranjangOrderByRelationAggregateInput
    transaksi?: transaksiOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id_user?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    token?: StringNullableFilter<"users"> | string | null
    alamat?: StringNullableFilter<"users"> | string | null
    keranjang?: KeranjangListRelationFilter
    transaksi?: TransaksiListRelationFilter
  }, "id_user" | "email">

  export type usersOrderByWithAggregationInput = {
    id_user?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
    email?: SortOrder
    alamat?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    token?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    alamat?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type jasa_pengirimCreateInput = {
    jasa_kirim: string
    harga_pengiriman: number
    transaksi?: transaksiCreateNestedManyWithoutJasa_pengirimInput
  }

  export type jasa_pengirimUncheckedCreateInput = {
    id_pengiriman?: number
    jasa_kirim: string
    harga_pengiriman: number
    transaksi?: transaksiUncheckedCreateNestedManyWithoutJasa_pengirimInput
  }

  export type jasa_pengirimUpdateInput = {
    jasa_kirim?: StringFieldUpdateOperationsInput | string
    harga_pengiriman?: IntFieldUpdateOperationsInput | number
    transaksi?: transaksiUpdateManyWithoutJasa_pengirimNestedInput
  }

  export type jasa_pengirimUncheckedUpdateInput = {
    id_pengiriman?: IntFieldUpdateOperationsInput | number
    jasa_kirim?: StringFieldUpdateOperationsInput | string
    harga_pengiriman?: IntFieldUpdateOperationsInput | number
    transaksi?: transaksiUncheckedUpdateManyWithoutJasa_pengirimNestedInput
  }

  export type jasa_pengirimCreateManyInput = {
    id_pengiriman?: number
    jasa_kirim: string
    harga_pengiriman: number
  }

  export type jasa_pengirimUpdateManyMutationInput = {
    jasa_kirim?: StringFieldUpdateOperationsInput | string
    harga_pengiriman?: IntFieldUpdateOperationsInput | number
  }

  export type jasa_pengirimUncheckedUpdateManyInput = {
    id_pengiriman?: IntFieldUpdateOperationsInput | number
    jasa_kirim?: StringFieldUpdateOperationsInput | string
    harga_pengiriman?: IntFieldUpdateOperationsInput | number
  }

  export type keranjangCreateInput = {
    jumlah_pembelian: number
    total_harga: number
    users: usersCreateNestedOneWithoutKeranjangInput
    produk: produkCreateNestedOneWithoutKeranjangInput
  }

  export type keranjangUncheckedCreateInput = {
    id_keranjang?: number
    id_user: number
    id_produk: number
    jumlah_pembelian: number
    total_harga: number
  }

  export type keranjangUpdateInput = {
    jumlah_pembelian?: IntFieldUpdateOperationsInput | number
    total_harga?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutKeranjangNestedInput
    produk?: produkUpdateOneRequiredWithoutKeranjangNestedInput
  }

  export type keranjangUncheckedUpdateInput = {
    id_keranjang?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_produk?: IntFieldUpdateOperationsInput | number
    jumlah_pembelian?: IntFieldUpdateOperationsInput | number
    total_harga?: IntFieldUpdateOperationsInput | number
  }

  export type keranjangCreateManyInput = {
    id_keranjang?: number
    id_user: number
    id_produk: number
    jumlah_pembelian: number
    total_harga: number
  }

  export type keranjangUpdateManyMutationInput = {
    jumlah_pembelian?: IntFieldUpdateOperationsInput | number
    total_harga?: IntFieldUpdateOperationsInput | number
  }

  export type keranjangUncheckedUpdateManyInput = {
    id_keranjang?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_produk?: IntFieldUpdateOperationsInput | number
    jumlah_pembelian?: IntFieldUpdateOperationsInput | number
    total_harga?: IntFieldUpdateOperationsInput | number
  }

  export type produkCreateInput = {
    nama_produk: string
    stok_kg?: number | null
    harga_kg: number
    deskripsi?: string | null
    status?: string | null
    gambar?: string | null
    keranjang?: keranjangCreateNestedManyWithoutProdukInput
  }

  export type produkUncheckedCreateInput = {
    id_produk?: number
    nama_produk: string
    stok_kg?: number | null
    harga_kg: number
    deskripsi?: string | null
    status?: string | null
    gambar?: string | null
    keranjang?: keranjangUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkUpdateInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    stok_kg?: NullableIntFieldUpdateOperationsInput | number | null
    harga_kg?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    keranjang?: keranjangUpdateManyWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    stok_kg?: NullableIntFieldUpdateOperationsInput | number | null
    harga_kg?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    keranjang?: keranjangUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type produkCreateManyInput = {
    id_produk?: number
    nama_produk: string
    stok_kg?: number | null
    harga_kg: number
    deskripsi?: string | null
    status?: string | null
    gambar?: string | null
  }

  export type produkUpdateManyMutationInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    stok_kg?: NullableIntFieldUpdateOperationsInput | number | null
    harga_kg?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkUncheckedUpdateManyInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    stok_kg?: NullableIntFieldUpdateOperationsInput | number | null
    harga_kg?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiCreateInput = {
    metode_transaksi?: $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: Date | string | null
    status_transaksi?: string | null
    users: usersCreateNestedOneWithoutTransaksiInput
    jasa_pengirim: jasa_pengirimCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiUncheckedCreateInput = {
    id_transaksi?: number
    id_user: number
    id_pengiriman: number
    metode_transaksi?: $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: Date | string | null
    status_transaksi?: string | null
  }

  export type transaksiUpdateInput = {
    metode_transaksi?: NullableEnumtransaksi_metode_transaksiFieldUpdateOperationsInput | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutTransaksiNestedInput
    jasa_pengirim?: jasa_pengirimUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_pengiriman?: IntFieldUpdateOperationsInput | number
    metode_transaksi?: NullableEnumtransaksi_metode_transaksiFieldUpdateOperationsInput | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiCreateManyInput = {
    id_transaksi?: number
    id_user: number
    id_pengiriman: number
    metode_transaksi?: $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: Date | string | null
    status_transaksi?: string | null
  }

  export type transaksiUpdateManyMutationInput = {
    metode_transaksi?: NullableEnumtransaksi_metode_transaksiFieldUpdateOperationsInput | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiUncheckedUpdateManyInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_pengiriman?: IntFieldUpdateOperationsInput | number
    metode_transaksi?: NullableEnumtransaksi_metode_transaksiFieldUpdateOperationsInput | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    username: string
    password: string
    token?: string | null
    email: string
    alamat?: string | null
    keranjang?: keranjangCreateNestedManyWithoutUsersInput
    transaksi?: transaksiCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id_user?: number
    username: string
    password: string
    token?: string | null
    email: string
    alamat?: string | null
    keranjang?: keranjangUncheckedCreateNestedManyWithoutUsersInput
    transaksi?: transaksiUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    keranjang?: keranjangUpdateManyWithoutUsersNestedInput
    transaksi?: transaksiUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    keranjang?: keranjangUncheckedUpdateManyWithoutUsersNestedInput
    transaksi?: transaksiUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id_user?: number
    username: string
    password: string
    token?: string | null
    email: string
    alamat?: string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TransaksiListRelationFilter = {
    every?: transaksiWhereInput
    some?: transaksiWhereInput
    none?: transaksiWhereInput
  }

  export type transaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type jasa_pengirimOrderByRelevanceInput = {
    fields: jasa_pengirimOrderByRelevanceFieldEnum | jasa_pengirimOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type jasa_pengirimCountOrderByAggregateInput = {
    id_pengiriman?: SortOrder
    jasa_kirim?: SortOrder
    harga_pengiriman?: SortOrder
  }

  export type jasa_pengirimAvgOrderByAggregateInput = {
    id_pengiriman?: SortOrder
    harga_pengiriman?: SortOrder
  }

  export type jasa_pengirimMaxOrderByAggregateInput = {
    id_pengiriman?: SortOrder
    jasa_kirim?: SortOrder
    harga_pengiriman?: SortOrder
  }

  export type jasa_pengirimMinOrderByAggregateInput = {
    id_pengiriman?: SortOrder
    jasa_kirim?: SortOrder
    harga_pengiriman?: SortOrder
  }

  export type jasa_pengirimSumOrderByAggregateInput = {
    id_pengiriman?: SortOrder
    harga_pengiriman?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type ProdukScalarRelationFilter = {
    is?: produkWhereInput
    isNot?: produkWhereInput
  }

  export type keranjangCountOrderByAggregateInput = {
    id_keranjang?: SortOrder
    id_user?: SortOrder
    id_produk?: SortOrder
    jumlah_pembelian?: SortOrder
    total_harga?: SortOrder
  }

  export type keranjangAvgOrderByAggregateInput = {
    id_keranjang?: SortOrder
    id_user?: SortOrder
    id_produk?: SortOrder
    jumlah_pembelian?: SortOrder
    total_harga?: SortOrder
  }

  export type keranjangMaxOrderByAggregateInput = {
    id_keranjang?: SortOrder
    id_user?: SortOrder
    id_produk?: SortOrder
    jumlah_pembelian?: SortOrder
    total_harga?: SortOrder
  }

  export type keranjangMinOrderByAggregateInput = {
    id_keranjang?: SortOrder
    id_user?: SortOrder
    id_produk?: SortOrder
    jumlah_pembelian?: SortOrder
    total_harga?: SortOrder
  }

  export type keranjangSumOrderByAggregateInput = {
    id_keranjang?: SortOrder
    id_user?: SortOrder
    id_produk?: SortOrder
    jumlah_pembelian?: SortOrder
    total_harga?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type KeranjangListRelationFilter = {
    every?: keranjangWhereInput
    some?: keranjangWhereInput
    none?: keranjangWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type keranjangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produkOrderByRelevanceInput = {
    fields: produkOrderByRelevanceFieldEnum | produkOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type produkCountOrderByAggregateInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    stok_kg?: SortOrder
    harga_kg?: SortOrder
    deskripsi?: SortOrder
    status?: SortOrder
    gambar?: SortOrder
  }

  export type produkAvgOrderByAggregateInput = {
    id_produk?: SortOrder
    stok_kg?: SortOrder
    harga_kg?: SortOrder
  }

  export type produkMaxOrderByAggregateInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    stok_kg?: SortOrder
    harga_kg?: SortOrder
    deskripsi?: SortOrder
    status?: SortOrder
    gambar?: SortOrder
  }

  export type produkMinOrderByAggregateInput = {
    id_produk?: SortOrder
    nama_produk?: SortOrder
    stok_kg?: SortOrder
    harga_kg?: SortOrder
    deskripsi?: SortOrder
    status?: SortOrder
    gambar?: SortOrder
  }

  export type produkSumOrderByAggregateInput = {
    id_produk?: SortOrder
    stok_kg?: SortOrder
    harga_kg?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumtransaksi_metode_transaksiNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.transaksi_metode_transaksi | Enumtransaksi_metode_transaksiFieldRefInput<$PrismaModel> | null
    in?: $Enums.transaksi_metode_transaksi[] | null
    notIn?: $Enums.transaksi_metode_transaksi[] | null
    not?: NestedEnumtransaksi_metode_transaksiNullableFilter<$PrismaModel> | $Enums.transaksi_metode_transaksi | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Jasa_pengirimScalarRelationFilter = {
    is?: jasa_pengirimWhereInput
    isNot?: jasa_pengirimWhereInput
  }

  export type transaksiOrderByRelevanceInput = {
    fields: transaksiOrderByRelevanceFieldEnum | transaksiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type transaksiCountOrderByAggregateInput = {
    id_transaksi?: SortOrder
    id_user?: SortOrder
    id_pengiriman?: SortOrder
    metode_transaksi?: SortOrder
    tgl_transaksi?: SortOrder
    status_transaksi?: SortOrder
  }

  export type transaksiAvgOrderByAggregateInput = {
    id_transaksi?: SortOrder
    id_user?: SortOrder
    id_pengiriman?: SortOrder
  }

  export type transaksiMaxOrderByAggregateInput = {
    id_transaksi?: SortOrder
    id_user?: SortOrder
    id_pengiriman?: SortOrder
    metode_transaksi?: SortOrder
    tgl_transaksi?: SortOrder
    status_transaksi?: SortOrder
  }

  export type transaksiMinOrderByAggregateInput = {
    id_transaksi?: SortOrder
    id_user?: SortOrder
    id_pengiriman?: SortOrder
    metode_transaksi?: SortOrder
    tgl_transaksi?: SortOrder
    status_transaksi?: SortOrder
  }

  export type transaksiSumOrderByAggregateInput = {
    id_transaksi?: SortOrder
    id_user?: SortOrder
    id_pengiriman?: SortOrder
  }

  export type Enumtransaksi_metode_transaksiNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaksi_metode_transaksi | Enumtransaksi_metode_transaksiFieldRefInput<$PrismaModel> | null
    in?: $Enums.transaksi_metode_transaksi[] | null
    notIn?: $Enums.transaksi_metode_transaksi[] | null
    not?: NestedEnumtransaksi_metode_transaksiNullableWithAggregatesFilter<$PrismaModel> | $Enums.transaksi_metode_transaksi | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtransaksi_metode_transaksiNullableFilter<$PrismaModel>
    _max?: NestedEnumtransaksi_metode_transaksiNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id_user?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id_user?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id_user?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type transaksiCreateNestedManyWithoutJasa_pengirimInput = {
    create?: XOR<transaksiCreateWithoutJasa_pengirimInput, transaksiUncheckedCreateWithoutJasa_pengirimInput> | transaksiCreateWithoutJasa_pengirimInput[] | transaksiUncheckedCreateWithoutJasa_pengirimInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutJasa_pengirimInput | transaksiCreateOrConnectWithoutJasa_pengirimInput[]
    createMany?: transaksiCreateManyJasa_pengirimInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type transaksiUncheckedCreateNestedManyWithoutJasa_pengirimInput = {
    create?: XOR<transaksiCreateWithoutJasa_pengirimInput, transaksiUncheckedCreateWithoutJasa_pengirimInput> | transaksiCreateWithoutJasa_pengirimInput[] | transaksiUncheckedCreateWithoutJasa_pengirimInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutJasa_pengirimInput | transaksiCreateOrConnectWithoutJasa_pengirimInput[]
    createMany?: transaksiCreateManyJasa_pengirimInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type transaksiUpdateManyWithoutJasa_pengirimNestedInput = {
    create?: XOR<transaksiCreateWithoutJasa_pengirimInput, transaksiUncheckedCreateWithoutJasa_pengirimInput> | transaksiCreateWithoutJasa_pengirimInput[] | transaksiUncheckedCreateWithoutJasa_pengirimInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutJasa_pengirimInput | transaksiCreateOrConnectWithoutJasa_pengirimInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutJasa_pengirimInput | transaksiUpsertWithWhereUniqueWithoutJasa_pengirimInput[]
    createMany?: transaksiCreateManyJasa_pengirimInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutJasa_pengirimInput | transaksiUpdateWithWhereUniqueWithoutJasa_pengirimInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutJasa_pengirimInput | transaksiUpdateManyWithWhereWithoutJasa_pengirimInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type transaksiUncheckedUpdateManyWithoutJasa_pengirimNestedInput = {
    create?: XOR<transaksiCreateWithoutJasa_pengirimInput, transaksiUncheckedCreateWithoutJasa_pengirimInput> | transaksiCreateWithoutJasa_pengirimInput[] | transaksiUncheckedCreateWithoutJasa_pengirimInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutJasa_pengirimInput | transaksiCreateOrConnectWithoutJasa_pengirimInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutJasa_pengirimInput | transaksiUpsertWithWhereUniqueWithoutJasa_pengirimInput[]
    createMany?: transaksiCreateManyJasa_pengirimInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutJasa_pengirimInput | transaksiUpdateWithWhereUniqueWithoutJasa_pengirimInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutJasa_pengirimInput | transaksiUpdateManyWithWhereWithoutJasa_pengirimInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutKeranjangInput = {
    create?: XOR<usersCreateWithoutKeranjangInput, usersUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: usersCreateOrConnectWithoutKeranjangInput
    connect?: usersWhereUniqueInput
  }

  export type produkCreateNestedOneWithoutKeranjangInput = {
    create?: XOR<produkCreateWithoutKeranjangInput, produkUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: produkCreateOrConnectWithoutKeranjangInput
    connect?: produkWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutKeranjangNestedInput = {
    create?: XOR<usersCreateWithoutKeranjangInput, usersUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: usersCreateOrConnectWithoutKeranjangInput
    upsert?: usersUpsertWithoutKeranjangInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutKeranjangInput, usersUpdateWithoutKeranjangInput>, usersUncheckedUpdateWithoutKeranjangInput>
  }

  export type produkUpdateOneRequiredWithoutKeranjangNestedInput = {
    create?: XOR<produkCreateWithoutKeranjangInput, produkUncheckedCreateWithoutKeranjangInput>
    connectOrCreate?: produkCreateOrConnectWithoutKeranjangInput
    upsert?: produkUpsertWithoutKeranjangInput
    connect?: produkWhereUniqueInput
    update?: XOR<XOR<produkUpdateToOneWithWhereWithoutKeranjangInput, produkUpdateWithoutKeranjangInput>, produkUncheckedUpdateWithoutKeranjangInput>
  }

  export type keranjangCreateNestedManyWithoutProdukInput = {
    create?: XOR<keranjangCreateWithoutProdukInput, keranjangUncheckedCreateWithoutProdukInput> | keranjangCreateWithoutProdukInput[] | keranjangUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutProdukInput | keranjangCreateOrConnectWithoutProdukInput[]
    createMany?: keranjangCreateManyProdukInputEnvelope
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
  }

  export type keranjangUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<keranjangCreateWithoutProdukInput, keranjangUncheckedCreateWithoutProdukInput> | keranjangCreateWithoutProdukInput[] | keranjangUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutProdukInput | keranjangCreateOrConnectWithoutProdukInput[]
    createMany?: keranjangCreateManyProdukInputEnvelope
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type keranjangUpdateManyWithoutProdukNestedInput = {
    create?: XOR<keranjangCreateWithoutProdukInput, keranjangUncheckedCreateWithoutProdukInput> | keranjangCreateWithoutProdukInput[] | keranjangUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutProdukInput | keranjangCreateOrConnectWithoutProdukInput[]
    upsert?: keranjangUpsertWithWhereUniqueWithoutProdukInput | keranjangUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: keranjangCreateManyProdukInputEnvelope
    set?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    disconnect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    delete?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    update?: keranjangUpdateWithWhereUniqueWithoutProdukInput | keranjangUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: keranjangUpdateManyWithWhereWithoutProdukInput | keranjangUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
  }

  export type keranjangUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<keranjangCreateWithoutProdukInput, keranjangUncheckedCreateWithoutProdukInput> | keranjangCreateWithoutProdukInput[] | keranjangUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutProdukInput | keranjangCreateOrConnectWithoutProdukInput[]
    upsert?: keranjangUpsertWithWhereUniqueWithoutProdukInput | keranjangUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: keranjangCreateManyProdukInputEnvelope
    set?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    disconnect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    delete?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    update?: keranjangUpdateWithWhereUniqueWithoutProdukInput | keranjangUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: keranjangUpdateManyWithWhereWithoutProdukInput | keranjangUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<usersCreateWithoutTransaksiInput, usersUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransaksiInput
    connect?: usersWhereUniqueInput
  }

  export type jasa_pengirimCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<jasa_pengirimCreateWithoutTransaksiInput, jasa_pengirimUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: jasa_pengirimCreateOrConnectWithoutTransaksiInput
    connect?: jasa_pengirimWhereUniqueInput
  }

  export type NullableEnumtransaksi_metode_transaksiFieldUpdateOperationsInput = {
    set?: $Enums.transaksi_metode_transaksi | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<usersCreateWithoutTransaksiInput, usersUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: usersCreateOrConnectWithoutTransaksiInput
    upsert?: usersUpsertWithoutTransaksiInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTransaksiInput, usersUpdateWithoutTransaksiInput>, usersUncheckedUpdateWithoutTransaksiInput>
  }

  export type jasa_pengirimUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<jasa_pengirimCreateWithoutTransaksiInput, jasa_pengirimUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: jasa_pengirimCreateOrConnectWithoutTransaksiInput
    upsert?: jasa_pengirimUpsertWithoutTransaksiInput
    connect?: jasa_pengirimWhereUniqueInput
    update?: XOR<XOR<jasa_pengirimUpdateToOneWithWhereWithoutTransaksiInput, jasa_pengirimUpdateWithoutTransaksiInput>, jasa_pengirimUncheckedUpdateWithoutTransaksiInput>
  }

  export type keranjangCreateNestedManyWithoutUsersInput = {
    create?: XOR<keranjangCreateWithoutUsersInput, keranjangUncheckedCreateWithoutUsersInput> | keranjangCreateWithoutUsersInput[] | keranjangUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutUsersInput | keranjangCreateOrConnectWithoutUsersInput[]
    createMany?: keranjangCreateManyUsersInputEnvelope
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
  }

  export type transaksiCreateNestedManyWithoutUsersInput = {
    create?: XOR<transaksiCreateWithoutUsersInput, transaksiUncheckedCreateWithoutUsersInput> | transaksiCreateWithoutUsersInput[] | transaksiUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutUsersInput | transaksiCreateOrConnectWithoutUsersInput[]
    createMany?: transaksiCreateManyUsersInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type keranjangUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<keranjangCreateWithoutUsersInput, keranjangUncheckedCreateWithoutUsersInput> | keranjangCreateWithoutUsersInput[] | keranjangUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutUsersInput | keranjangCreateOrConnectWithoutUsersInput[]
    createMany?: keranjangCreateManyUsersInputEnvelope
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
  }

  export type transaksiUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<transaksiCreateWithoutUsersInput, transaksiUncheckedCreateWithoutUsersInput> | transaksiCreateWithoutUsersInput[] | transaksiUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutUsersInput | transaksiCreateOrConnectWithoutUsersInput[]
    createMany?: transaksiCreateManyUsersInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type keranjangUpdateManyWithoutUsersNestedInput = {
    create?: XOR<keranjangCreateWithoutUsersInput, keranjangUncheckedCreateWithoutUsersInput> | keranjangCreateWithoutUsersInput[] | keranjangUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutUsersInput | keranjangCreateOrConnectWithoutUsersInput[]
    upsert?: keranjangUpsertWithWhereUniqueWithoutUsersInput | keranjangUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: keranjangCreateManyUsersInputEnvelope
    set?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    disconnect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    delete?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    update?: keranjangUpdateWithWhereUniqueWithoutUsersInput | keranjangUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: keranjangUpdateManyWithWhereWithoutUsersInput | keranjangUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
  }

  export type transaksiUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transaksiCreateWithoutUsersInput, transaksiUncheckedCreateWithoutUsersInput> | transaksiCreateWithoutUsersInput[] | transaksiUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutUsersInput | transaksiCreateOrConnectWithoutUsersInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutUsersInput | transaksiUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transaksiCreateManyUsersInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutUsersInput | transaksiUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutUsersInput | transaksiUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type keranjangUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<keranjangCreateWithoutUsersInput, keranjangUncheckedCreateWithoutUsersInput> | keranjangCreateWithoutUsersInput[] | keranjangUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: keranjangCreateOrConnectWithoutUsersInput | keranjangCreateOrConnectWithoutUsersInput[]
    upsert?: keranjangUpsertWithWhereUniqueWithoutUsersInput | keranjangUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: keranjangCreateManyUsersInputEnvelope
    set?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    disconnect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    delete?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    connect?: keranjangWhereUniqueInput | keranjangWhereUniqueInput[]
    update?: keranjangUpdateWithWhereUniqueWithoutUsersInput | keranjangUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: keranjangUpdateManyWithWhereWithoutUsersInput | keranjangUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
  }

  export type transaksiUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<transaksiCreateWithoutUsersInput, transaksiUncheckedCreateWithoutUsersInput> | transaksiCreateWithoutUsersInput[] | transaksiUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutUsersInput | transaksiCreateOrConnectWithoutUsersInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutUsersInput | transaksiUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: transaksiCreateManyUsersInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutUsersInput | transaksiUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutUsersInput | transaksiUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumtransaksi_metode_transaksiNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.transaksi_metode_transaksi | Enumtransaksi_metode_transaksiFieldRefInput<$PrismaModel> | null
    in?: $Enums.transaksi_metode_transaksi[] | null
    notIn?: $Enums.transaksi_metode_transaksi[] | null
    not?: NestedEnumtransaksi_metode_transaksiNullableFilter<$PrismaModel> | $Enums.transaksi_metode_transaksi | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumtransaksi_metode_transaksiNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaksi_metode_transaksi | Enumtransaksi_metode_transaksiFieldRefInput<$PrismaModel> | null
    in?: $Enums.transaksi_metode_transaksi[] | null
    notIn?: $Enums.transaksi_metode_transaksi[] | null
    not?: NestedEnumtransaksi_metode_transaksiNullableWithAggregatesFilter<$PrismaModel> | $Enums.transaksi_metode_transaksi | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtransaksi_metode_transaksiNullableFilter<$PrismaModel>
    _max?: NestedEnumtransaksi_metode_transaksiNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type transaksiCreateWithoutJasa_pengirimInput = {
    metode_transaksi?: $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: Date | string | null
    status_transaksi?: string | null
    users: usersCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiUncheckedCreateWithoutJasa_pengirimInput = {
    id_transaksi?: number
    id_user: number
    metode_transaksi?: $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: Date | string | null
    status_transaksi?: string | null
  }

  export type transaksiCreateOrConnectWithoutJasa_pengirimInput = {
    where: transaksiWhereUniqueInput
    create: XOR<transaksiCreateWithoutJasa_pengirimInput, transaksiUncheckedCreateWithoutJasa_pengirimInput>
  }

  export type transaksiCreateManyJasa_pengirimInputEnvelope = {
    data: transaksiCreateManyJasa_pengirimInput | transaksiCreateManyJasa_pengirimInput[]
    skipDuplicates?: boolean
  }

  export type transaksiUpsertWithWhereUniqueWithoutJasa_pengirimInput = {
    where: transaksiWhereUniqueInput
    update: XOR<transaksiUpdateWithoutJasa_pengirimInput, transaksiUncheckedUpdateWithoutJasa_pengirimInput>
    create: XOR<transaksiCreateWithoutJasa_pengirimInput, transaksiUncheckedCreateWithoutJasa_pengirimInput>
  }

  export type transaksiUpdateWithWhereUniqueWithoutJasa_pengirimInput = {
    where: transaksiWhereUniqueInput
    data: XOR<transaksiUpdateWithoutJasa_pengirimInput, transaksiUncheckedUpdateWithoutJasa_pengirimInput>
  }

  export type transaksiUpdateManyWithWhereWithoutJasa_pengirimInput = {
    where: transaksiScalarWhereInput
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyWithoutJasa_pengirimInput>
  }

  export type transaksiScalarWhereInput = {
    AND?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
    OR?: transaksiScalarWhereInput[]
    NOT?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
    id_transaksi?: IntFilter<"transaksi"> | number
    id_user?: IntFilter<"transaksi"> | number
    id_pengiriman?: IntFilter<"transaksi"> | number
    metode_transaksi?: Enumtransaksi_metode_transaksiNullableFilter<"transaksi"> | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: DateTimeNullableFilter<"transaksi"> | Date | string | null
    status_transaksi?: StringNullableFilter<"transaksi"> | string | null
  }

  export type usersCreateWithoutKeranjangInput = {
    username: string
    password: string
    token?: string | null
    email: string
    alamat?: string | null
    transaksi?: transaksiCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutKeranjangInput = {
    id_user?: number
    username: string
    password: string
    token?: string | null
    email: string
    alamat?: string | null
    transaksi?: transaksiUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutKeranjangInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutKeranjangInput, usersUncheckedCreateWithoutKeranjangInput>
  }

  export type produkCreateWithoutKeranjangInput = {
    nama_produk: string
    stok_kg?: number | null
    harga_kg: number
    deskripsi?: string | null
    status?: string | null
    gambar?: string | null
  }

  export type produkUncheckedCreateWithoutKeranjangInput = {
    id_produk?: number
    nama_produk: string
    stok_kg?: number | null
    harga_kg: number
    deskripsi?: string | null
    status?: string | null
    gambar?: string | null
  }

  export type produkCreateOrConnectWithoutKeranjangInput = {
    where: produkWhereUniqueInput
    create: XOR<produkCreateWithoutKeranjangInput, produkUncheckedCreateWithoutKeranjangInput>
  }

  export type usersUpsertWithoutKeranjangInput = {
    update: XOR<usersUpdateWithoutKeranjangInput, usersUncheckedUpdateWithoutKeranjangInput>
    create: XOR<usersCreateWithoutKeranjangInput, usersUncheckedCreateWithoutKeranjangInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutKeranjangInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutKeranjangInput, usersUncheckedUpdateWithoutKeranjangInput>
  }

  export type usersUpdateWithoutKeranjangInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    transaksi?: transaksiUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutKeranjangInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    transaksi?: transaksiUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type produkUpsertWithoutKeranjangInput = {
    update: XOR<produkUpdateWithoutKeranjangInput, produkUncheckedUpdateWithoutKeranjangInput>
    create: XOR<produkCreateWithoutKeranjangInput, produkUncheckedCreateWithoutKeranjangInput>
    where?: produkWhereInput
  }

  export type produkUpdateToOneWithWhereWithoutKeranjangInput = {
    where?: produkWhereInput
    data: XOR<produkUpdateWithoutKeranjangInput, produkUncheckedUpdateWithoutKeranjangInput>
  }

  export type produkUpdateWithoutKeranjangInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    stok_kg?: NullableIntFieldUpdateOperationsInput | number | null
    harga_kg?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkUncheckedUpdateWithoutKeranjangInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    stok_kg?: NullableIntFieldUpdateOperationsInput | number | null
    harga_kg?: IntFieldUpdateOperationsInput | number
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type keranjangCreateWithoutProdukInput = {
    jumlah_pembelian: number
    total_harga: number
    users: usersCreateNestedOneWithoutKeranjangInput
  }

  export type keranjangUncheckedCreateWithoutProdukInput = {
    id_keranjang?: number
    id_user: number
    jumlah_pembelian: number
    total_harga: number
  }

  export type keranjangCreateOrConnectWithoutProdukInput = {
    where: keranjangWhereUniqueInput
    create: XOR<keranjangCreateWithoutProdukInput, keranjangUncheckedCreateWithoutProdukInput>
  }

  export type keranjangCreateManyProdukInputEnvelope = {
    data: keranjangCreateManyProdukInput | keranjangCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type keranjangUpsertWithWhereUniqueWithoutProdukInput = {
    where: keranjangWhereUniqueInput
    update: XOR<keranjangUpdateWithoutProdukInput, keranjangUncheckedUpdateWithoutProdukInput>
    create: XOR<keranjangCreateWithoutProdukInput, keranjangUncheckedCreateWithoutProdukInput>
  }

  export type keranjangUpdateWithWhereUniqueWithoutProdukInput = {
    where: keranjangWhereUniqueInput
    data: XOR<keranjangUpdateWithoutProdukInput, keranjangUncheckedUpdateWithoutProdukInput>
  }

  export type keranjangUpdateManyWithWhereWithoutProdukInput = {
    where: keranjangScalarWhereInput
    data: XOR<keranjangUpdateManyMutationInput, keranjangUncheckedUpdateManyWithoutProdukInput>
  }

  export type keranjangScalarWhereInput = {
    AND?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
    OR?: keranjangScalarWhereInput[]
    NOT?: keranjangScalarWhereInput | keranjangScalarWhereInput[]
    id_keranjang?: IntFilter<"keranjang"> | number
    id_user?: IntFilter<"keranjang"> | number
    id_produk?: IntFilter<"keranjang"> | number
    jumlah_pembelian?: IntFilter<"keranjang"> | number
    total_harga?: IntFilter<"keranjang"> | number
  }

  export type usersCreateWithoutTransaksiInput = {
    username: string
    password: string
    token?: string | null
    email: string
    alamat?: string | null
    keranjang?: keranjangCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTransaksiInput = {
    id_user?: number
    username: string
    password: string
    token?: string | null
    email: string
    alamat?: string | null
    keranjang?: keranjangUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTransaksiInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTransaksiInput, usersUncheckedCreateWithoutTransaksiInput>
  }

  export type jasa_pengirimCreateWithoutTransaksiInput = {
    jasa_kirim: string
    harga_pengiriman: number
  }

  export type jasa_pengirimUncheckedCreateWithoutTransaksiInput = {
    id_pengiriman?: number
    jasa_kirim: string
    harga_pengiriman: number
  }

  export type jasa_pengirimCreateOrConnectWithoutTransaksiInput = {
    where: jasa_pengirimWhereUniqueInput
    create: XOR<jasa_pengirimCreateWithoutTransaksiInput, jasa_pengirimUncheckedCreateWithoutTransaksiInput>
  }

  export type usersUpsertWithoutTransaksiInput = {
    update: XOR<usersUpdateWithoutTransaksiInput, usersUncheckedUpdateWithoutTransaksiInput>
    create: XOR<usersCreateWithoutTransaksiInput, usersUncheckedCreateWithoutTransaksiInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTransaksiInput, usersUncheckedUpdateWithoutTransaksiInput>
  }

  export type usersUpdateWithoutTransaksiInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    keranjang?: keranjangUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTransaksiInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    alamat?: NullableStringFieldUpdateOperationsInput | string | null
    keranjang?: keranjangUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type jasa_pengirimUpsertWithoutTransaksiInput = {
    update: XOR<jasa_pengirimUpdateWithoutTransaksiInput, jasa_pengirimUncheckedUpdateWithoutTransaksiInput>
    create: XOR<jasa_pengirimCreateWithoutTransaksiInput, jasa_pengirimUncheckedCreateWithoutTransaksiInput>
    where?: jasa_pengirimWhereInput
  }

  export type jasa_pengirimUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: jasa_pengirimWhereInput
    data: XOR<jasa_pengirimUpdateWithoutTransaksiInput, jasa_pengirimUncheckedUpdateWithoutTransaksiInput>
  }

  export type jasa_pengirimUpdateWithoutTransaksiInput = {
    jasa_kirim?: StringFieldUpdateOperationsInput | string
    harga_pengiriman?: IntFieldUpdateOperationsInput | number
  }

  export type jasa_pengirimUncheckedUpdateWithoutTransaksiInput = {
    id_pengiriman?: IntFieldUpdateOperationsInput | number
    jasa_kirim?: StringFieldUpdateOperationsInput | string
    harga_pengiriman?: IntFieldUpdateOperationsInput | number
  }

  export type keranjangCreateWithoutUsersInput = {
    jumlah_pembelian: number
    total_harga: number
    produk: produkCreateNestedOneWithoutKeranjangInput
  }

  export type keranjangUncheckedCreateWithoutUsersInput = {
    id_keranjang?: number
    id_produk: number
    jumlah_pembelian: number
    total_harga: number
  }

  export type keranjangCreateOrConnectWithoutUsersInput = {
    where: keranjangWhereUniqueInput
    create: XOR<keranjangCreateWithoutUsersInput, keranjangUncheckedCreateWithoutUsersInput>
  }

  export type keranjangCreateManyUsersInputEnvelope = {
    data: keranjangCreateManyUsersInput | keranjangCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type transaksiCreateWithoutUsersInput = {
    metode_transaksi?: $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: Date | string | null
    status_transaksi?: string | null
    jasa_pengirim: jasa_pengirimCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiUncheckedCreateWithoutUsersInput = {
    id_transaksi?: number
    id_pengiriman: number
    metode_transaksi?: $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: Date | string | null
    status_transaksi?: string | null
  }

  export type transaksiCreateOrConnectWithoutUsersInput = {
    where: transaksiWhereUniqueInput
    create: XOR<transaksiCreateWithoutUsersInput, transaksiUncheckedCreateWithoutUsersInput>
  }

  export type transaksiCreateManyUsersInputEnvelope = {
    data: transaksiCreateManyUsersInput | transaksiCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type keranjangUpsertWithWhereUniqueWithoutUsersInput = {
    where: keranjangWhereUniqueInput
    update: XOR<keranjangUpdateWithoutUsersInput, keranjangUncheckedUpdateWithoutUsersInput>
    create: XOR<keranjangCreateWithoutUsersInput, keranjangUncheckedCreateWithoutUsersInput>
  }

  export type keranjangUpdateWithWhereUniqueWithoutUsersInput = {
    where: keranjangWhereUniqueInput
    data: XOR<keranjangUpdateWithoutUsersInput, keranjangUncheckedUpdateWithoutUsersInput>
  }

  export type keranjangUpdateManyWithWhereWithoutUsersInput = {
    where: keranjangScalarWhereInput
    data: XOR<keranjangUpdateManyMutationInput, keranjangUncheckedUpdateManyWithoutUsersInput>
  }

  export type transaksiUpsertWithWhereUniqueWithoutUsersInput = {
    where: transaksiWhereUniqueInput
    update: XOR<transaksiUpdateWithoutUsersInput, transaksiUncheckedUpdateWithoutUsersInput>
    create: XOR<transaksiCreateWithoutUsersInput, transaksiUncheckedCreateWithoutUsersInput>
  }

  export type transaksiUpdateWithWhereUniqueWithoutUsersInput = {
    where: transaksiWhereUniqueInput
    data: XOR<transaksiUpdateWithoutUsersInput, transaksiUncheckedUpdateWithoutUsersInput>
  }

  export type transaksiUpdateManyWithWhereWithoutUsersInput = {
    where: transaksiScalarWhereInput
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyWithoutUsersInput>
  }

  export type transaksiCreateManyJasa_pengirimInput = {
    id_transaksi?: number
    id_user: number
    metode_transaksi?: $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: Date | string | null
    status_transaksi?: string | null
  }

  export type transaksiUpdateWithoutJasa_pengirimInput = {
    metode_transaksi?: NullableEnumtransaksi_metode_transaksiFieldUpdateOperationsInput | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateWithoutJasa_pengirimInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    metode_transaksi?: NullableEnumtransaksi_metode_transaksiFieldUpdateOperationsInput | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiUncheckedUpdateManyWithoutJasa_pengirimInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    metode_transaksi?: NullableEnumtransaksi_metode_transaksiFieldUpdateOperationsInput | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type keranjangCreateManyProdukInput = {
    id_keranjang?: number
    id_user: number
    jumlah_pembelian: number
    total_harga: number
  }

  export type keranjangUpdateWithoutProdukInput = {
    jumlah_pembelian?: IntFieldUpdateOperationsInput | number
    total_harga?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutKeranjangNestedInput
  }

  export type keranjangUncheckedUpdateWithoutProdukInput = {
    id_keranjang?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    jumlah_pembelian?: IntFieldUpdateOperationsInput | number
    total_harga?: IntFieldUpdateOperationsInput | number
  }

  export type keranjangUncheckedUpdateManyWithoutProdukInput = {
    id_keranjang?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    jumlah_pembelian?: IntFieldUpdateOperationsInput | number
    total_harga?: IntFieldUpdateOperationsInput | number
  }

  export type keranjangCreateManyUsersInput = {
    id_keranjang?: number
    id_produk: number
    jumlah_pembelian: number
    total_harga: number
  }

  export type transaksiCreateManyUsersInput = {
    id_transaksi?: number
    id_pengiriman: number
    metode_transaksi?: $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: Date | string | null
    status_transaksi?: string | null
  }

  export type keranjangUpdateWithoutUsersInput = {
    jumlah_pembelian?: IntFieldUpdateOperationsInput | number
    total_harga?: IntFieldUpdateOperationsInput | number
    produk?: produkUpdateOneRequiredWithoutKeranjangNestedInput
  }

  export type keranjangUncheckedUpdateWithoutUsersInput = {
    id_keranjang?: IntFieldUpdateOperationsInput | number
    id_produk?: IntFieldUpdateOperationsInput | number
    jumlah_pembelian?: IntFieldUpdateOperationsInput | number
    total_harga?: IntFieldUpdateOperationsInput | number
  }

  export type keranjangUncheckedUpdateManyWithoutUsersInput = {
    id_keranjang?: IntFieldUpdateOperationsInput | number
    id_produk?: IntFieldUpdateOperationsInput | number
    jumlah_pembelian?: IntFieldUpdateOperationsInput | number
    total_harga?: IntFieldUpdateOperationsInput | number
  }

  export type transaksiUpdateWithoutUsersInput = {
    metode_transaksi?: NullableEnumtransaksi_metode_transaksiFieldUpdateOperationsInput | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
    jasa_pengirim?: jasa_pengirimUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateWithoutUsersInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    id_pengiriman?: IntFieldUpdateOperationsInput | number
    metode_transaksi?: NullableEnumtransaksi_metode_transaksiFieldUpdateOperationsInput | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transaksiUncheckedUpdateManyWithoutUsersInput = {
    id_transaksi?: IntFieldUpdateOperationsInput | number
    id_pengiriman?: IntFieldUpdateOperationsInput | number
    metode_transaksi?: NullableEnumtransaksi_metode_transaksiFieldUpdateOperationsInput | $Enums.transaksi_metode_transaksi | null
    tgl_transaksi?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status_transaksi?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}