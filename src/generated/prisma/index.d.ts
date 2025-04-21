
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model College
 * 
 */
export type College = $Result.DefaultSelection<Prisma.$CollegePayload>
/**
 * Model Warehouse
 * 
 */
export type Warehouse = $Result.DefaultSelection<Prisma.$WarehousePayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model ComponentRequest
 * 
 */
export type ComponentRequest = $Result.DefaultSelection<Prisma.$ComponentRequestPayload>
/**
 * Model HOD
 * 
 */
export type HOD = $Result.DefaultSelection<Prisma.$HODPayload>
/**
 * Model Lab
 * 
 */
export type Lab = $Result.DefaultSelection<Prisma.$LabPayload>
/**
 * Model Component
 * 
 */
export type Component = $Result.DefaultSelection<Prisma.$ComponentPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const ComponentType: {
  MONITOR: 'MONITOR',
  KEYBOARD: 'KEYBOARD',
  MOUSE: 'MOUSE',
  CPU: 'CPU',
  PRINTER: 'PRINTER',
  OTHER: 'OTHER'
};

export type ComponentType = (typeof ComponentType)[keyof typeof ComponentType]


export const Status: {
  WORKING: 'WORKING',
  FAULTY: 'FAULTY',
  UNDER_REPAIR: 'UNDER_REPAIR',
  REPLACED: 'REPLACED'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Role: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF',
  HOD: 'HOD'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type ComponentType = $Enums.ComponentType

export const ComponentType: typeof $Enums.ComponentType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.college`: Exposes CRUD operations for the **College** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colleges
    * const colleges = await prisma.college.findMany()
    * ```
    */
  get college(): Prisma.CollegeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouse`: Exposes CRUD operations for the **Warehouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouse.findMany()
    * ```
    */
  get warehouse(): Prisma.WarehouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.componentRequest`: Exposes CRUD operations for the **ComponentRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComponentRequests
    * const componentRequests = await prisma.componentRequest.findMany()
    * ```
    */
  get componentRequest(): Prisma.ComponentRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hOD`: Exposes CRUD operations for the **HOD** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HODS
    * const hODS = await prisma.hOD.findMany()
    * ```
    */
  get hOD(): Prisma.HODDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lab`: Exposes CRUD operations for the **Lab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Labs
    * const labs = await prisma.lab.findMany()
    * ```
    */
  get lab(): Prisma.LabDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.component`: Exposes CRUD operations for the **Component** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Components
    * const components = await prisma.component.findMany()
    * ```
    */
  get component(): Prisma.ComponentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Admin: 'Admin',
    College: 'College',
    Warehouse: 'Warehouse',
    Staff: 'Staff',
    ComponentRequest: 'ComponentRequest',
    HOD: 'HOD',
    Lab: 'Lab',
    Component: 'Component',
    Department: 'Department',
    Report: 'Report'
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
      modelProps: "admin" | "college" | "warehouse" | "staff" | "componentRequest" | "hOD" | "lab" | "component" | "department" | "report"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      College: {
        payload: Prisma.$CollegePayload<ExtArgs>
        fields: Prisma.CollegeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollegeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollegeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findFirst: {
            args: Prisma.CollegeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollegeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findMany: {
            args: Prisma.CollegeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          create: {
            args: Prisma.CollegeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          createMany: {
            args: Prisma.CollegeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollegeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          delete: {
            args: Prisma.CollegeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          update: {
            args: Prisma.CollegeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          deleteMany: {
            args: Prisma.CollegeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollegeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollegeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          upsert: {
            args: Prisma.CollegeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          aggregate: {
            args: Prisma.CollegeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollege>
          }
          groupBy: {
            args: Prisma.CollegeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollegeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollegeCountArgs<ExtArgs>
            result: $Utils.Optional<CollegeCountAggregateOutputType> | number
          }
        }
      }
      Warehouse: {
        payload: Prisma.$WarehousePayload<ExtArgs>
        fields: Prisma.WarehouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findFirst: {
            args: Prisma.WarehouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          findMany: {
            args: Prisma.WarehouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          create: {
            args: Prisma.WarehouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          createMany: {
            args: Prisma.WarehouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          delete: {
            args: Prisma.WarehouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          update: {
            args: Prisma.WarehouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          deleteMany: {
            args: Prisma.WarehouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarehouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>[]
          }
          upsert: {
            args: Prisma.WarehouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousePayload>
          }
          aggregate: {
            args: Prisma.WarehouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouse>
          }
          groupBy: {
            args: Prisma.WarehouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      ComponentRequest: {
        payload: Prisma.$ComponentRequestPayload<ExtArgs>
        fields: Prisma.ComponentRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComponentRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComponentRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentRequestPayload>
          }
          findFirst: {
            args: Prisma.ComponentRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComponentRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentRequestPayload>
          }
          findMany: {
            args: Prisma.ComponentRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentRequestPayload>[]
          }
          create: {
            args: Prisma.ComponentRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentRequestPayload>
          }
          createMany: {
            args: Prisma.ComponentRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComponentRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentRequestPayload>[]
          }
          delete: {
            args: Prisma.ComponentRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentRequestPayload>
          }
          update: {
            args: Prisma.ComponentRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentRequestPayload>
          }
          deleteMany: {
            args: Prisma.ComponentRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComponentRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComponentRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentRequestPayload>[]
          }
          upsert: {
            args: Prisma.ComponentRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentRequestPayload>
          }
          aggregate: {
            args: Prisma.ComponentRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComponentRequest>
          }
          groupBy: {
            args: Prisma.ComponentRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComponentRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComponentRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ComponentRequestCountAggregateOutputType> | number
          }
        }
      }
      HOD: {
        payload: Prisma.$HODPayload<ExtArgs>
        fields: Prisma.HODFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HODFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HODPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HODFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HODPayload>
          }
          findFirst: {
            args: Prisma.HODFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HODPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HODFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HODPayload>
          }
          findMany: {
            args: Prisma.HODFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HODPayload>[]
          }
          create: {
            args: Prisma.HODCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HODPayload>
          }
          createMany: {
            args: Prisma.HODCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HODCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HODPayload>[]
          }
          delete: {
            args: Prisma.HODDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HODPayload>
          }
          update: {
            args: Prisma.HODUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HODPayload>
          }
          deleteMany: {
            args: Prisma.HODDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HODUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HODUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HODPayload>[]
          }
          upsert: {
            args: Prisma.HODUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HODPayload>
          }
          aggregate: {
            args: Prisma.HODAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHOD>
          }
          groupBy: {
            args: Prisma.HODGroupByArgs<ExtArgs>
            result: $Utils.Optional<HODGroupByOutputType>[]
          }
          count: {
            args: Prisma.HODCountArgs<ExtArgs>
            result: $Utils.Optional<HODCountAggregateOutputType> | number
          }
        }
      }
      Lab: {
        payload: Prisma.$LabPayload<ExtArgs>
        fields: Prisma.LabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          findFirst: {
            args: Prisma.LabFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          findMany: {
            args: Prisma.LabFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>[]
          }
          create: {
            args: Prisma.LabCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          createMany: {
            args: Prisma.LabCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>[]
          }
          delete: {
            args: Prisma.LabDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          update: {
            args: Prisma.LabUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          deleteMany: {
            args: Prisma.LabDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>[]
          }
          upsert: {
            args: Prisma.LabUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabPayload>
          }
          aggregate: {
            args: Prisma.LabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLab>
          }
          groupBy: {
            args: Prisma.LabGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabCountArgs<ExtArgs>
            result: $Utils.Optional<LabCountAggregateOutputType> | number
          }
        }
      }
      Component: {
        payload: Prisma.$ComponentPayload<ExtArgs>
        fields: Prisma.ComponentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComponentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComponentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>
          }
          findFirst: {
            args: Prisma.ComponentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComponentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>
          }
          findMany: {
            args: Prisma.ComponentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>[]
          }
          create: {
            args: Prisma.ComponentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>
          }
          createMany: {
            args: Prisma.ComponentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComponentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>[]
          }
          delete: {
            args: Prisma.ComponentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>
          }
          update: {
            args: Prisma.ComponentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>
          }
          deleteMany: {
            args: Prisma.ComponentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComponentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComponentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>[]
          }
          upsert: {
            args: Prisma.ComponentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComponentPayload>
          }
          aggregate: {
            args: Prisma.ComponentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComponent>
          }
          groupBy: {
            args: Prisma.ComponentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComponentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComponentCountArgs<ExtArgs>
            result: $Utils.Optional<ComponentCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    admin?: AdminOmit
    college?: CollegeOmit
    warehouse?: WarehouseOmit
    staff?: StaffOmit
    componentRequest?: ComponentRequestOmit
    hOD?: HODOmit
    lab?: LabOmit
    component?: ComponentOmit
    department?: DepartmentOmit
    report?: ReportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    colleges: number
    staffs: number
    warehouses: number
    component: number
    HOD: number
    Department: number
    Lab: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colleges?: boolean | AdminCountOutputTypeCountCollegesArgs
    staffs?: boolean | AdminCountOutputTypeCountStaffsArgs
    warehouses?: boolean | AdminCountOutputTypeCountWarehousesArgs
    component?: boolean | AdminCountOutputTypeCountComponentArgs
    HOD?: boolean | AdminCountOutputTypeCountHODArgs
    Department?: boolean | AdminCountOutputTypeCountDepartmentArgs
    Lab?: boolean | AdminCountOutputTypeCountLabArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountCollegesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountStaffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountWarehousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountComponentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountHODArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HODWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountDepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountLabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabWhereInput
  }


  /**
   * Count Type CollegeCountOutputType
   */

  export type CollegeCountOutputType = {
    staffs: number
    warehouses: number
    component: number
    hod: number
    Department: number
  }

  export type CollegeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffs?: boolean | CollegeCountOutputTypeCountStaffsArgs
    warehouses?: boolean | CollegeCountOutputTypeCountWarehousesArgs
    component?: boolean | CollegeCountOutputTypeCountComponentArgs
    hod?: boolean | CollegeCountOutputTypeCountHodArgs
    Department?: boolean | CollegeCountOutputTypeCountDepartmentArgs
  }

  // Custom InputTypes
  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCountOutputType
     */
    select?: CollegeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountStaffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountWarehousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountComponentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentWhereInput
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountHodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HODWhereInput
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountDepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }


  /**
   * Count Type WarehouseCountOutputType
   */

  export type WarehouseCountOutputType = {
    component: number
  }

  export type WarehouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    component?: boolean | WarehouseCountOutputTypeCountComponentArgs
  }

  // Custom InputTypes
  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseCountOutputType
     */
    select?: WarehouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehouseCountOutputType without action
   */
  export type WarehouseCountOutputTypeCountComponentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    componentRequest: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    componentRequest?: boolean | StaffCountOutputTypeCountComponentRequestArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountComponentRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentRequestWhereInput
  }


  /**
   * Count Type HODCountOutputType
   */

  export type HODCountOutputType = {
    departments: number
    Report: number
  }

  export type HODCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | HODCountOutputTypeCountDepartmentsArgs
    Report?: boolean | HODCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * HODCountOutputType without action
   */
  export type HODCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HODCountOutputType
     */
    select?: HODCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HODCountOutputType without action
   */
  export type HODCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * HODCountOutputType without action
   */
  export type HODCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Count Type LabCountOutputType
   */

  export type LabCountOutputType = {
    components: number
  }

  export type LabCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    components?: boolean | LabCountOutputTypeCountComponentsArgs
  }

  // Custom InputTypes
  /**
   * LabCountOutputType without action
   */
  export type LabCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabCountOutputType
     */
    select?: LabCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LabCountOutputType without action
   */
  export type LabCountOutputTypeCountComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentWhereInput
  }


  /**
   * Count Type ComponentCountOutputType
   */

  export type ComponentCountOutputType = {
    Report: number
    Department: number
  }

  export type ComponentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Report?: boolean | ComponentCountOutputTypeCountReportArgs
    Department?: boolean | ComponentCountOutputTypeCountDepartmentArgs
  }

  // Custom InputTypes
  /**
   * ComponentCountOutputType without action
   */
  export type ComponentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentCountOutputType
     */
    select?: ComponentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComponentCountOutputType without action
   */
  export type ComponentCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * ComponentCountOutputType without action
   */
  export type ComponentCountOutputTypeCountDepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    Lab: number
    components: number
    Report: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Lab?: boolean | DepartmentCountOutputTypeCountLabArgs
    components?: boolean | DepartmentCountOutputTypeCountComponentsArgs
    Report?: boolean | DepartmentCountOutputTypeCountReportArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountLabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountComponentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    role: number
    resetToken: number
    resetTokenExpiry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    phone: string
    role: $Enums.Role
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    colleges?: boolean | Admin$collegesArgs<ExtArgs>
    staffs?: boolean | Admin$staffsArgs<ExtArgs>
    warehouses?: boolean | Admin$warehousesArgs<ExtArgs>
    component?: boolean | Admin$componentArgs<ExtArgs>
    HOD?: boolean | Admin$HODArgs<ExtArgs>
    Department?: boolean | Admin$DepartmentArgs<ExtArgs>
    Lab?: boolean | Admin$LabArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "role" | "resetToken" | "resetTokenExpiry" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colleges?: boolean | Admin$collegesArgs<ExtArgs>
    staffs?: boolean | Admin$staffsArgs<ExtArgs>
    warehouses?: boolean | Admin$warehousesArgs<ExtArgs>
    component?: boolean | Admin$componentArgs<ExtArgs>
    HOD?: boolean | Admin$HODArgs<ExtArgs>
    Department?: boolean | Admin$DepartmentArgs<ExtArgs>
    Lab?: boolean | Admin$LabArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      colleges: Prisma.$CollegePayload<ExtArgs>[]
      staffs: Prisma.$StaffPayload<ExtArgs>[]
      warehouses: Prisma.$WarehousePayload<ExtArgs>[]
      component: Prisma.$ComponentPayload<ExtArgs>[]
      HOD: Prisma.$HODPayload<ExtArgs>[]
      Department: Prisma.$DepartmentPayload<ExtArgs>[]
      Lab: Prisma.$LabPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      phone: string
      role: $Enums.Role
      resetToken: string | null
      resetTokenExpiry: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    colleges<T extends Admin$collegesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$collegesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staffs<T extends Admin$staffsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$staffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    warehouses<T extends Admin$warehousesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$warehousesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    component<T extends Admin$componentArgs<ExtArgs> = {}>(args?: Subset<T, Admin$componentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    HOD<T extends Admin$HODArgs<ExtArgs> = {}>(args?: Subset<T, Admin$HODArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Department<T extends Admin$DepartmentArgs<ExtArgs> = {}>(args?: Subset<T, Admin$DepartmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Lab<T extends Admin$LabArgs<ExtArgs> = {}>(args?: Subset<T, Admin$LabArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly phone: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'Role'>
    readonly resetToken: FieldRef<"Admin", 'String'>
    readonly resetTokenExpiry: FieldRef<"Admin", 'DateTime'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.colleges
   */
  export type Admin$collegesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    where?: CollegeWhereInput
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    cursor?: CollegeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * Admin.staffs
   */
  export type Admin$staffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Admin.warehouses
   */
  export type Admin$warehousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    cursor?: WarehouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Admin.component
   */
  export type Admin$componentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    where?: ComponentWhereInput
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    cursor?: ComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }

  /**
   * Admin.HOD
   */
  export type Admin$HODArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODInclude<ExtArgs> | null
    where?: HODWhereInput
    orderBy?: HODOrderByWithRelationInput | HODOrderByWithRelationInput[]
    cursor?: HODWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HODScalarFieldEnum | HODScalarFieldEnum[]
  }

  /**
   * Admin.Department
   */
  export type Admin$DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Admin.Lab
   */
  export type Admin$LabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    where?: LabWhereInput
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    cursor?: LabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model College
   */

  export type AggregateCollege = {
    _count: CollegeCountAggregateOutputType | null
    _avg: CollegeAvgAggregateOutputType | null
    _sum: CollegeSumAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  export type CollegeAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type CollegeSumAggregateOutputType = {
    id: number | null
    adminId: number | null
  }

  export type CollegeMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    collegeId: string | null
    adminId: number | null
  }

  export type CollegeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    collegeId: string | null
    adminId: number | null
  }

  export type CollegeCountAggregateOutputType = {
    id: number
    name: number
    address: number
    collegeId: number
    adminId: number
    _all: number
  }


  export type CollegeAvgAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type CollegeSumAggregateInputType = {
    id?: true
    adminId?: true
  }

  export type CollegeMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    collegeId?: true
    adminId?: true
  }

  export type CollegeMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    collegeId?: true
    adminId?: true
  }

  export type CollegeCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    collegeId?: true
    adminId?: true
    _all?: true
  }

  export type CollegeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which College to aggregate.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colleges
    **/
    _count?: true | CollegeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollegeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollegeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollegeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollegeMaxAggregateInputType
  }

  export type GetCollegeAggregateType<T extends CollegeAggregateArgs> = {
        [P in keyof T & keyof AggregateCollege]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollege[P]>
      : GetScalarType<T[P], AggregateCollege[P]>
  }




  export type CollegeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeWhereInput
    orderBy?: CollegeOrderByWithAggregationInput | CollegeOrderByWithAggregationInput[]
    by: CollegeScalarFieldEnum[] | CollegeScalarFieldEnum
    having?: CollegeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollegeCountAggregateInputType | true
    _avg?: CollegeAvgAggregateInputType
    _sum?: CollegeSumAggregateInputType
    _min?: CollegeMinAggregateInputType
    _max?: CollegeMaxAggregateInputType
  }

  export type CollegeGroupByOutputType = {
    id: number
    name: string
    address: string
    collegeId: string
    adminId: number
    _count: CollegeCountAggregateOutputType | null
    _avg: CollegeAvgAggregateOutputType | null
    _sum: CollegeSumAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  type GetCollegeGroupByPayload<T extends CollegeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollegeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollegeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollegeGroupByOutputType[P]>
            : GetScalarType<T[P], CollegeGroupByOutputType[P]>
        }
      >
    >


  export type CollegeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    collegeId?: boolean
    adminId?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    staffs?: boolean | College$staffsArgs<ExtArgs>
    warehouses?: boolean | College$warehousesArgs<ExtArgs>
    component?: boolean | College$componentArgs<ExtArgs>
    hod?: boolean | College$hodArgs<ExtArgs>
    Department?: boolean | College$DepartmentArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    collegeId?: boolean
    adminId?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    collegeId?: boolean
    adminId?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    collegeId?: boolean
    adminId?: boolean
  }

  export type CollegeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "collegeId" | "adminId", ExtArgs["result"]["college"]>
  export type CollegeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    staffs?: boolean | College$staffsArgs<ExtArgs>
    warehouses?: boolean | College$warehousesArgs<ExtArgs>
    component?: boolean | College$componentArgs<ExtArgs>
    hod?: boolean | College$hodArgs<ExtArgs>
    Department?: boolean | College$DepartmentArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollegeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type CollegeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $CollegePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "College"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      staffs: Prisma.$StaffPayload<ExtArgs>[]
      warehouses: Prisma.$WarehousePayload<ExtArgs>[]
      component: Prisma.$ComponentPayload<ExtArgs>[]
      hod: Prisma.$HODPayload<ExtArgs>[]
      Department: Prisma.$DepartmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      collegeId: string
      adminId: number
    }, ExtArgs["result"]["college"]>
    composites: {}
  }

  type CollegeGetPayload<S extends boolean | null | undefined | CollegeDefaultArgs> = $Result.GetResult<Prisma.$CollegePayload, S>

  type CollegeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollegeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollegeCountAggregateInputType | true
    }

  export interface CollegeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['College'], meta: { name: 'College' } }
    /**
     * Find zero or one College that matches the filter.
     * @param {CollegeFindUniqueArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollegeFindUniqueArgs>(args: SelectSubset<T, CollegeFindUniqueArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one College that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollegeFindUniqueOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollegeFindUniqueOrThrowArgs>(args: SelectSubset<T, CollegeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollegeFindFirstArgs>(args?: SelectSubset<T, CollegeFindFirstArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollegeFindFirstOrThrowArgs>(args?: SelectSubset<T, CollegeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colleges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colleges
     * const colleges = await prisma.college.findMany()
     * 
     * // Get first 10 Colleges
     * const colleges = await prisma.college.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collegeWithIdOnly = await prisma.college.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollegeFindManyArgs>(args?: SelectSubset<T, CollegeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a College.
     * @param {CollegeCreateArgs} args - Arguments to create a College.
     * @example
     * // Create one College
     * const College = await prisma.college.create({
     *   data: {
     *     // ... data to create a College
     *   }
     * })
     * 
     */
    create<T extends CollegeCreateArgs>(args: SelectSubset<T, CollegeCreateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colleges.
     * @param {CollegeCreateManyArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollegeCreateManyArgs>(args?: SelectSubset<T, CollegeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colleges and returns the data saved in the database.
     * @param {CollegeCreateManyAndReturnArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollegeCreateManyAndReturnArgs>(args?: SelectSubset<T, CollegeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a College.
     * @param {CollegeDeleteArgs} args - Arguments to delete one College.
     * @example
     * // Delete one College
     * const College = await prisma.college.delete({
     *   where: {
     *     // ... filter to delete one College
     *   }
     * })
     * 
     */
    delete<T extends CollegeDeleteArgs>(args: SelectSubset<T, CollegeDeleteArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one College.
     * @param {CollegeUpdateArgs} args - Arguments to update one College.
     * @example
     * // Update one College
     * const college = await prisma.college.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollegeUpdateArgs>(args: SelectSubset<T, CollegeUpdateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colleges.
     * @param {CollegeDeleteManyArgs} args - Arguments to filter Colleges to delete.
     * @example
     * // Delete a few Colleges
     * const { count } = await prisma.college.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollegeDeleteManyArgs>(args?: SelectSubset<T, CollegeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollegeUpdateManyArgs>(args: SelectSubset<T, CollegeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges and returns the data updated in the database.
     * @param {CollegeUpdateManyAndReturnArgs} args - Arguments to update many Colleges.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colleges and only return the `id`
     * const collegeWithIdOnly = await prisma.college.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollegeUpdateManyAndReturnArgs>(args: SelectSubset<T, CollegeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one College.
     * @param {CollegeUpsertArgs} args - Arguments to update or create a College.
     * @example
     * // Update or create a College
     * const college = await prisma.college.upsert({
     *   create: {
     *     // ... data to create a College
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the College we want to update
     *   }
     * })
     */
    upsert<T extends CollegeUpsertArgs>(args: SelectSubset<T, CollegeUpsertArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCountArgs} args - Arguments to filter Colleges to count.
     * @example
     * // Count the number of Colleges
     * const count = await prisma.college.count({
     *   where: {
     *     // ... the filter for the Colleges we want to count
     *   }
     * })
    **/
    count<T extends CollegeCountArgs>(
      args?: Subset<T, CollegeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollegeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollegeAggregateArgs>(args: Subset<T, CollegeAggregateArgs>): Prisma.PrismaPromise<GetCollegeAggregateType<T>>

    /**
     * Group by College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeGroupByArgs} args - Group by arguments.
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
      T extends CollegeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollegeGroupByArgs['orderBy'] }
        : { orderBy?: CollegeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollegeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollegeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the College model
   */
  readonly fields: CollegeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for College.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollegeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staffs<T extends College$staffsArgs<ExtArgs> = {}>(args?: Subset<T, College$staffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    warehouses<T extends College$warehousesArgs<ExtArgs> = {}>(args?: Subset<T, College$warehousesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    component<T extends College$componentArgs<ExtArgs> = {}>(args?: Subset<T, College$componentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hod<T extends College$hodArgs<ExtArgs> = {}>(args?: Subset<T, College$hodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Department<T extends College$DepartmentArgs<ExtArgs> = {}>(args?: Subset<T, College$DepartmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the College model
   */
  interface CollegeFieldRefs {
    readonly id: FieldRef<"College", 'Int'>
    readonly name: FieldRef<"College", 'String'>
    readonly address: FieldRef<"College", 'String'>
    readonly collegeId: FieldRef<"College", 'String'>
    readonly adminId: FieldRef<"College", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * College findUnique
   */
  export type CollegeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findUniqueOrThrow
   */
  export type CollegeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findFirst
   */
  export type CollegeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findFirstOrThrow
   */
  export type CollegeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findMany
   */
  export type CollegeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which Colleges to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College create
   */
  export type CollegeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to create a College.
     */
    data: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
  }

  /**
   * College createMany
   */
  export type CollegeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * College createManyAndReturn
   */
  export type CollegeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * College update
   */
  export type CollegeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to update a College.
     */
    data: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
    /**
     * Choose, which College to update.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College updateMany
   */
  export type CollegeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College updateManyAndReturn
   */
  export type CollegeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * College upsert
   */
  export type CollegeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The filter to search for the College to update in case it exists.
     */
    where: CollegeWhereUniqueInput
    /**
     * In case the College found by the `where` argument doesn't exist, create a new College with this data.
     */
    create: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
    /**
     * In case the College was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
  }

  /**
   * College delete
   */
  export type CollegeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter which College to delete.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College deleteMany
   */
  export type CollegeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colleges to delete
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to delete.
     */
    limit?: number
  }

  /**
   * College.staffs
   */
  export type College$staffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    cursor?: StaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * College.warehouses
   */
  export type College$warehousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    cursor?: WarehouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * College.component
   */
  export type College$componentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    where?: ComponentWhereInput
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    cursor?: ComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }

  /**
   * College.hod
   */
  export type College$hodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODInclude<ExtArgs> | null
    where?: HODWhereInput
    orderBy?: HODOrderByWithRelationInput | HODOrderByWithRelationInput[]
    cursor?: HODWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HODScalarFieldEnum | HODScalarFieldEnum[]
  }

  /**
   * College.Department
   */
  export type College$DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * College without action
   */
  export type CollegeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
  }


  /**
   * Model Warehouse
   */

  export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  export type WarehouseAvgAggregateOutputType = {
    id: number | null
    collegeId: number | null
    adminId: number | null
  }

  export type WarehouseSumAggregateOutputType = {
    id: number | null
    collegeId: number | null
    adminId: number | null
  }

  export type WarehouseMinAggregateOutputType = {
    id: number | null
    name: string | null
    collegeId: number | null
    adminId: number | null
    warehouseId: string | null
  }

  export type WarehouseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    collegeId: number | null
    adminId: number | null
    warehouseId: string | null
  }

  export type WarehouseCountAggregateOutputType = {
    id: number
    name: number
    collegeId: number
    adminId: number
    warehouseId: number
    _all: number
  }


  export type WarehouseAvgAggregateInputType = {
    id?: true
    collegeId?: true
    adminId?: true
  }

  export type WarehouseSumAggregateInputType = {
    id?: true
    collegeId?: true
    adminId?: true
  }

  export type WarehouseMinAggregateInputType = {
    id?: true
    name?: true
    collegeId?: true
    adminId?: true
    warehouseId?: true
  }

  export type WarehouseMaxAggregateInputType = {
    id?: true
    name?: true
    collegeId?: true
    adminId?: true
    warehouseId?: true
  }

  export type WarehouseCountAggregateInputType = {
    id?: true
    name?: true
    collegeId?: true
    adminId?: true
    warehouseId?: true
    _all?: true
  }

  export type WarehouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouse to aggregate.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseMaxAggregateInputType
  }

  export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouse[P]>
      : GetScalarType<T[P], AggregateWarehouse[P]>
  }




  export type WarehouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseWhereInput
    orderBy?: WarehouseOrderByWithAggregationInput | WarehouseOrderByWithAggregationInput[]
    by: WarehouseScalarFieldEnum[] | WarehouseScalarFieldEnum
    having?: WarehouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseCountAggregateInputType | true
    _avg?: WarehouseAvgAggregateInputType
    _sum?: WarehouseSumAggregateInputType
    _min?: WarehouseMinAggregateInputType
    _max?: WarehouseMaxAggregateInputType
  }

  export type WarehouseGroupByOutputType = {
    id: number
    name: string
    collegeId: number
    adminId: number
    warehouseId: string
    _count: WarehouseCountAggregateOutputType | null
    _avg: WarehouseAvgAggregateOutputType | null
    _sum: WarehouseSumAggregateOutputType | null
    _min: WarehouseMinAggregateOutputType | null
    _max: WarehouseMaxAggregateOutputType | null
  }

  type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    collegeId?: boolean
    adminId?: boolean
    warehouseId?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    component?: boolean | Warehouse$componentArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    collegeId?: boolean
    adminId?: boolean
    warehouseId?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    collegeId?: boolean
    adminId?: boolean
    warehouseId?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouse"]>

  export type WarehouseSelectScalar = {
    id?: boolean
    name?: boolean
    collegeId?: boolean
    adminId?: boolean
    warehouseId?: boolean
  }

  export type WarehouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "collegeId" | "adminId" | "warehouseId", ExtArgs["result"]["warehouse"]>
  export type WarehouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    component?: boolean | Warehouse$componentArgs<ExtArgs>
    _count?: boolean | WarehouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WarehouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type WarehouseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $WarehousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouse"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      college: Prisma.$CollegePayload<ExtArgs>
      component: Prisma.$ComponentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      collegeId: number
      adminId: number
      warehouseId: string
    }, ExtArgs["result"]["warehouse"]>
    composites: {}
  }

  type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = $Result.GetResult<Prisma.$WarehousePayload, S>

  type WarehouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehouseCountAggregateInputType | true
    }

  export interface WarehouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'], meta: { name: 'Warehouse' } }
    /**
     * Find zero or one Warehouse that matches the filter.
     * @param {WarehouseFindUniqueArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseFindUniqueArgs>(args: SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warehouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehouseFindUniqueOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseFindFirstArgs>(args?: SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindFirstOrThrowArgs} args - Arguments to find a Warehouse
     * @example
     * // Get one Warehouse
     * const warehouse = await prisma.warehouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouse.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehouseFindManyArgs>(args?: SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warehouse.
     * @param {WarehouseCreateArgs} args - Arguments to create a Warehouse.
     * @example
     * // Create one Warehouse
     * const Warehouse = await prisma.warehouse.create({
     *   data: {
     *     // ... data to create a Warehouse
     *   }
     * })
     * 
     */
    create<T extends WarehouseCreateArgs>(args: SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warehouses.
     * @param {WarehouseCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseCreateManyArgs>(args?: SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warehouses and returns the data saved in the database.
     * @param {WarehouseCreateManyAndReturnArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouse = await prisma.warehouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warehouses and only return the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehouseCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warehouse.
     * @param {WarehouseDeleteArgs} args - Arguments to delete one Warehouse.
     * @example
     * // Delete one Warehouse
     * const Warehouse = await prisma.warehouse.delete({
     *   where: {
     *     // ... filter to delete one Warehouse
     *   }
     * })
     * 
     */
    delete<T extends WarehouseDeleteArgs>(args: SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warehouse.
     * @param {WarehouseUpdateArgs} args - Arguments to update one Warehouse.
     * @example
     * // Update one Warehouse
     * const warehouse = await prisma.warehouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseUpdateArgs>(args: SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehouseDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseDeleteManyArgs>(args?: SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseUpdateManyArgs>(args: SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses and returns the data updated in the database.
     * @param {WarehouseUpdateManyAndReturnArgs} args - Arguments to update many Warehouses.
     * @example
     * // Update many Warehouses
     * const warehouse = await prisma.warehouse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warehouses and only return the `id`
     * const warehouseWithIdOnly = await prisma.warehouse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarehouseUpdateManyAndReturnArgs>(args: SelectSubset<T, WarehouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warehouse.
     * @param {WarehouseUpsertArgs} args - Arguments to update or create a Warehouse.
     * @example
     * // Update or create a Warehouse
     * const warehouse = await prisma.warehouse.upsert({
     *   create: {
     *     // ... data to create a Warehouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouse we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseUpsertArgs>(args: SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouse.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehouseCountArgs>(
      args?: Subset<T, WarehouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarehouseAggregateArgs>(args: Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>

    /**
     * Group by Warehouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseGroupByArgs} args - Group by arguments.
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
      T extends WarehouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouse model
   */
  readonly fields: WarehouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    component<T extends Warehouse$componentArgs<ExtArgs> = {}>(args?: Subset<T, Warehouse$componentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Warehouse model
   */
  interface WarehouseFieldRefs {
    readonly id: FieldRef<"Warehouse", 'Int'>
    readonly name: FieldRef<"Warehouse", 'String'>
    readonly collegeId: FieldRef<"Warehouse", 'Int'>
    readonly adminId: FieldRef<"Warehouse", 'Int'>
    readonly warehouseId: FieldRef<"Warehouse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Warehouse findUnique
   */
  export type WarehouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findUniqueOrThrow
   */
  export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse findFirst
   */
  export type WarehouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findFirstOrThrow
   */
  export type WarehouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouse to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse findMany
   */
  export type WarehouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehouseOrderByWithRelationInput | WarehouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehouseScalarFieldEnum | WarehouseScalarFieldEnum[]
  }

  /**
   * Warehouse create
   */
  export type WarehouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouse.
     */
    data: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
  }

  /**
   * Warehouse createMany
   */
  export type WarehouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouse createManyAndReturn
   */
  export type WarehouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * The data used to create many Warehouses.
     */
    data: WarehouseCreateManyInput | WarehouseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Warehouse update
   */
  export type WarehouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouse.
     */
    data: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
    /**
     * Choose, which Warehouse to update.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse updateMany
   */
  export type WarehouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouse updateManyAndReturn
   */
  export type WarehouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Warehouse upsert
   */
  export type WarehouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouse to update in case it exists.
     */
    where: WarehouseWhereUniqueInput
    /**
     * In case the Warehouse found by the `where` argument doesn't exist, create a new Warehouse with this data.
     */
    create: XOR<WarehouseCreateInput, WarehouseUncheckedCreateInput>
    /**
     * In case the Warehouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseUpdateInput, WarehouseUncheckedUpdateInput>
  }

  /**
   * Warehouse delete
   */
  export type WarehouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
    /**
     * Filter which Warehouse to delete.
     */
    where: WarehouseWhereUniqueInput
  }

  /**
   * Warehouse deleteMany
   */
  export type WarehouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehouseWhereInput
    /**
     * Limit how many Warehouses to delete.
     */
    limit?: number
  }

  /**
   * Warehouse.component
   */
  export type Warehouse$componentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    where?: ComponentWhereInput
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    cursor?: ComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }

  /**
   * Warehouse without action
   */
  export type WarehouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouse
     */
    select?: WarehouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouse
     */
    omit?: WarehouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    id: number | null
    collegeId: number | null
    adminId: number | null
  }

  export type StaffSumAggregateOutputType = {
    id: number | null
    collegeId: number | null
    adminId: number | null
  }

  export type StaffMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    collegeId: number | null
    adminId: number | null
    role: $Enums.Role | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    collegeId: number | null
    adminId: number | null
    role: $Enums.Role | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    collegeId: number
    adminId: number
    role: number
    resetToken: number
    resetTokenExpiry: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    id?: true
    collegeId?: true
    adminId?: true
  }

  export type StaffSumAggregateInputType = {
    id?: true
    collegeId?: true
    adminId?: true
  }

  export type StaffMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    collegeId?: true
    adminId?: true
    role?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    collegeId?: true
    adminId?: true
    role?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    collegeId?: true
    adminId?: true
    role?: true
    resetToken?: true
    resetTokenExpiry?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    phone: string
    collegeId: number
    adminId: number
    role: $Enums.Role
    resetToken: string | null
    resetTokenExpiry: Date | null
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    collegeId?: boolean
    adminId?: boolean
    role?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    componentRequest?: boolean | Staff$componentRequestArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    collegeId?: boolean
    adminId?: boolean
    role?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    collegeId?: boolean
    adminId?: boolean
    role?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    collegeId?: boolean
    adminId?: boolean
    role?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "collegeId" | "adminId" | "role" | "resetToken" | "resetTokenExpiry", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    componentRequest?: boolean | Staff$componentRequestArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      college: Prisma.$CollegePayload<ExtArgs>
      componentRequest: Prisma.$ComponentRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      phone: string
      collegeId: number
      adminId: number
      role: $Enums.Role
      resetToken: string | null
      resetTokenExpiry: Date | null
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
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
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    componentRequest<T extends Staff$componentRequestArgs<ExtArgs> = {}>(args?: Subset<T, Staff$componentRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'Int'>
    readonly name: FieldRef<"Staff", 'String'>
    readonly email: FieldRef<"Staff", 'String'>
    readonly password: FieldRef<"Staff", 'String'>
    readonly phone: FieldRef<"Staff", 'String'>
    readonly collegeId: FieldRef<"Staff", 'Int'>
    readonly adminId: FieldRef<"Staff", 'Int'>
    readonly role: FieldRef<"Staff", 'Role'>
    readonly resetToken: FieldRef<"Staff", 'String'>
    readonly resetTokenExpiry: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff.componentRequest
   */
  export type Staff$componentRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentRequest
     */
    select?: ComponentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentRequest
     */
    omit?: ComponentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentRequestInclude<ExtArgs> | null
    where?: ComponentRequestWhereInput
    orderBy?: ComponentRequestOrderByWithRelationInput | ComponentRequestOrderByWithRelationInput[]
    cursor?: ComponentRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComponentRequestScalarFieldEnum | ComponentRequestScalarFieldEnum[]
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model ComponentRequest
   */

  export type AggregateComponentRequest = {
    _count: ComponentRequestCountAggregateOutputType | null
    _avg: ComponentRequestAvgAggregateOutputType | null
    _sum: ComponentRequestSumAggregateOutputType | null
    _min: ComponentRequestMinAggregateOutputType | null
    _max: ComponentRequestMaxAggregateOutputType | null
  }

  export type ComponentRequestAvgAggregateOutputType = {
    id: number | null
    staffId: number | null
    createdByStaffId: number | null
  }

  export type ComponentRequestSumAggregateOutputType = {
    id: number | null
    staffId: number | null
    createdByStaffId: number | null
  }

  export type ComponentRequestMinAggregateOutputType = {
    id: number | null
    name: string | null
    brand: string | null
    modelNumber: string | null
    serialNumber: string | null
    createdAt: Date | null
    staffId: number | null
    type: string | null
    status: string | null
    createdByStaffId: number | null
  }

  export type ComponentRequestMaxAggregateOutputType = {
    id: number | null
    name: string | null
    brand: string | null
    modelNumber: string | null
    serialNumber: string | null
    createdAt: Date | null
    staffId: number | null
    type: string | null
    status: string | null
    createdByStaffId: number | null
  }

  export type ComponentRequestCountAggregateOutputType = {
    id: number
    name: number
    brand: number
    modelNumber: number
    serialNumber: number
    createdAt: number
    staffId: number
    type: number
    status: number
    createdByStaffId: number
    _all: number
  }


  export type ComponentRequestAvgAggregateInputType = {
    id?: true
    staffId?: true
    createdByStaffId?: true
  }

  export type ComponentRequestSumAggregateInputType = {
    id?: true
    staffId?: true
    createdByStaffId?: true
  }

  export type ComponentRequestMinAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    modelNumber?: true
    serialNumber?: true
    createdAt?: true
    staffId?: true
    type?: true
    status?: true
    createdByStaffId?: true
  }

  export type ComponentRequestMaxAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    modelNumber?: true
    serialNumber?: true
    createdAt?: true
    staffId?: true
    type?: true
    status?: true
    createdByStaffId?: true
  }

  export type ComponentRequestCountAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    modelNumber?: true
    serialNumber?: true
    createdAt?: true
    staffId?: true
    type?: true
    status?: true
    createdByStaffId?: true
    _all?: true
  }

  export type ComponentRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComponentRequest to aggregate.
     */
    where?: ComponentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentRequests to fetch.
     */
    orderBy?: ComponentRequestOrderByWithRelationInput | ComponentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComponentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComponentRequests
    **/
    _count?: true | ComponentRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComponentRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComponentRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComponentRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComponentRequestMaxAggregateInputType
  }

  export type GetComponentRequestAggregateType<T extends ComponentRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateComponentRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComponentRequest[P]>
      : GetScalarType<T[P], AggregateComponentRequest[P]>
  }




  export type ComponentRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentRequestWhereInput
    orderBy?: ComponentRequestOrderByWithAggregationInput | ComponentRequestOrderByWithAggregationInput[]
    by: ComponentRequestScalarFieldEnum[] | ComponentRequestScalarFieldEnum
    having?: ComponentRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComponentRequestCountAggregateInputType | true
    _avg?: ComponentRequestAvgAggregateInputType
    _sum?: ComponentRequestSumAggregateInputType
    _min?: ComponentRequestMinAggregateInputType
    _max?: ComponentRequestMaxAggregateInputType
  }

  export type ComponentRequestGroupByOutputType = {
    id: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt: Date
    staffId: number
    type: string
    status: string
    createdByStaffId: number | null
    _count: ComponentRequestCountAggregateOutputType | null
    _avg: ComponentRequestAvgAggregateOutputType | null
    _sum: ComponentRequestSumAggregateOutputType | null
    _min: ComponentRequestMinAggregateOutputType | null
    _max: ComponentRequestMaxAggregateOutputType | null
  }

  type GetComponentRequestGroupByPayload<T extends ComponentRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComponentRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComponentRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComponentRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ComponentRequestGroupByOutputType[P]>
        }
      >
    >


  export type ComponentRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    modelNumber?: boolean
    serialNumber?: boolean
    createdAt?: boolean
    staffId?: boolean
    type?: boolean
    status?: boolean
    createdByStaffId?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["componentRequest"]>

  export type ComponentRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    modelNumber?: boolean
    serialNumber?: boolean
    createdAt?: boolean
    staffId?: boolean
    type?: boolean
    status?: boolean
    createdByStaffId?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["componentRequest"]>

  export type ComponentRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    modelNumber?: boolean
    serialNumber?: boolean
    createdAt?: boolean
    staffId?: boolean
    type?: boolean
    status?: boolean
    createdByStaffId?: boolean
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["componentRequest"]>

  export type ComponentRequestSelectScalar = {
    id?: boolean
    name?: boolean
    brand?: boolean
    modelNumber?: boolean
    serialNumber?: boolean
    createdAt?: boolean
    staffId?: boolean
    type?: boolean
    status?: boolean
    createdByStaffId?: boolean
  }

  export type ComponentRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brand" | "modelNumber" | "serialNumber" | "createdAt" | "staffId" | "type" | "status" | "createdByStaffId", ExtArgs["result"]["componentRequest"]>
  export type ComponentRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }
  export type ComponentRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }
  export type ComponentRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | StaffDefaultArgs<ExtArgs>
  }

  export type $ComponentRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComponentRequest"
    objects: {
      staff: Prisma.$StaffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      brand: string
      modelNumber: string
      serialNumber: string
      createdAt: Date
      staffId: number
      type: string
      status: string
      createdByStaffId: number | null
    }, ExtArgs["result"]["componentRequest"]>
    composites: {}
  }

  type ComponentRequestGetPayload<S extends boolean | null | undefined | ComponentRequestDefaultArgs> = $Result.GetResult<Prisma.$ComponentRequestPayload, S>

  type ComponentRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComponentRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComponentRequestCountAggregateInputType | true
    }

  export interface ComponentRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComponentRequest'], meta: { name: 'ComponentRequest' } }
    /**
     * Find zero or one ComponentRequest that matches the filter.
     * @param {ComponentRequestFindUniqueArgs} args - Arguments to find a ComponentRequest
     * @example
     * // Get one ComponentRequest
     * const componentRequest = await prisma.componentRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComponentRequestFindUniqueArgs>(args: SelectSubset<T, ComponentRequestFindUniqueArgs<ExtArgs>>): Prisma__ComponentRequestClient<$Result.GetResult<Prisma.$ComponentRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ComponentRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComponentRequestFindUniqueOrThrowArgs} args - Arguments to find a ComponentRequest
     * @example
     * // Get one ComponentRequest
     * const componentRequest = await prisma.componentRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComponentRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ComponentRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComponentRequestClient<$Result.GetResult<Prisma.$ComponentRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComponentRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentRequestFindFirstArgs} args - Arguments to find a ComponentRequest
     * @example
     * // Get one ComponentRequest
     * const componentRequest = await prisma.componentRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComponentRequestFindFirstArgs>(args?: SelectSubset<T, ComponentRequestFindFirstArgs<ExtArgs>>): Prisma__ComponentRequestClient<$Result.GetResult<Prisma.$ComponentRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ComponentRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentRequestFindFirstOrThrowArgs} args - Arguments to find a ComponentRequest
     * @example
     * // Get one ComponentRequest
     * const componentRequest = await prisma.componentRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComponentRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ComponentRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComponentRequestClient<$Result.GetResult<Prisma.$ComponentRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ComponentRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComponentRequests
     * const componentRequests = await prisma.componentRequest.findMany()
     * 
     * // Get first 10 ComponentRequests
     * const componentRequests = await prisma.componentRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const componentRequestWithIdOnly = await prisma.componentRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComponentRequestFindManyArgs>(args?: SelectSubset<T, ComponentRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ComponentRequest.
     * @param {ComponentRequestCreateArgs} args - Arguments to create a ComponentRequest.
     * @example
     * // Create one ComponentRequest
     * const ComponentRequest = await prisma.componentRequest.create({
     *   data: {
     *     // ... data to create a ComponentRequest
     *   }
     * })
     * 
     */
    create<T extends ComponentRequestCreateArgs>(args: SelectSubset<T, ComponentRequestCreateArgs<ExtArgs>>): Prisma__ComponentRequestClient<$Result.GetResult<Prisma.$ComponentRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ComponentRequests.
     * @param {ComponentRequestCreateManyArgs} args - Arguments to create many ComponentRequests.
     * @example
     * // Create many ComponentRequests
     * const componentRequest = await prisma.componentRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComponentRequestCreateManyArgs>(args?: SelectSubset<T, ComponentRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ComponentRequests and returns the data saved in the database.
     * @param {ComponentRequestCreateManyAndReturnArgs} args - Arguments to create many ComponentRequests.
     * @example
     * // Create many ComponentRequests
     * const componentRequest = await prisma.componentRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ComponentRequests and only return the `id`
     * const componentRequestWithIdOnly = await prisma.componentRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComponentRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ComponentRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ComponentRequest.
     * @param {ComponentRequestDeleteArgs} args - Arguments to delete one ComponentRequest.
     * @example
     * // Delete one ComponentRequest
     * const ComponentRequest = await prisma.componentRequest.delete({
     *   where: {
     *     // ... filter to delete one ComponentRequest
     *   }
     * })
     * 
     */
    delete<T extends ComponentRequestDeleteArgs>(args: SelectSubset<T, ComponentRequestDeleteArgs<ExtArgs>>): Prisma__ComponentRequestClient<$Result.GetResult<Prisma.$ComponentRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ComponentRequest.
     * @param {ComponentRequestUpdateArgs} args - Arguments to update one ComponentRequest.
     * @example
     * // Update one ComponentRequest
     * const componentRequest = await prisma.componentRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComponentRequestUpdateArgs>(args: SelectSubset<T, ComponentRequestUpdateArgs<ExtArgs>>): Prisma__ComponentRequestClient<$Result.GetResult<Prisma.$ComponentRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ComponentRequests.
     * @param {ComponentRequestDeleteManyArgs} args - Arguments to filter ComponentRequests to delete.
     * @example
     * // Delete a few ComponentRequests
     * const { count } = await prisma.componentRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComponentRequestDeleteManyArgs>(args?: SelectSubset<T, ComponentRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComponentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComponentRequests
     * const componentRequest = await prisma.componentRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComponentRequestUpdateManyArgs>(args: SelectSubset<T, ComponentRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComponentRequests and returns the data updated in the database.
     * @param {ComponentRequestUpdateManyAndReturnArgs} args - Arguments to update many ComponentRequests.
     * @example
     * // Update many ComponentRequests
     * const componentRequest = await prisma.componentRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ComponentRequests and only return the `id`
     * const componentRequestWithIdOnly = await prisma.componentRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComponentRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ComponentRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ComponentRequest.
     * @param {ComponentRequestUpsertArgs} args - Arguments to update or create a ComponentRequest.
     * @example
     * // Update or create a ComponentRequest
     * const componentRequest = await prisma.componentRequest.upsert({
     *   create: {
     *     // ... data to create a ComponentRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComponentRequest we want to update
     *   }
     * })
     */
    upsert<T extends ComponentRequestUpsertArgs>(args: SelectSubset<T, ComponentRequestUpsertArgs<ExtArgs>>): Prisma__ComponentRequestClient<$Result.GetResult<Prisma.$ComponentRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ComponentRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentRequestCountArgs} args - Arguments to filter ComponentRequests to count.
     * @example
     * // Count the number of ComponentRequests
     * const count = await prisma.componentRequest.count({
     *   where: {
     *     // ... the filter for the ComponentRequests we want to count
     *   }
     * })
    **/
    count<T extends ComponentRequestCountArgs>(
      args?: Subset<T, ComponentRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComponentRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComponentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComponentRequestAggregateArgs>(args: Subset<T, ComponentRequestAggregateArgs>): Prisma.PrismaPromise<GetComponentRequestAggregateType<T>>

    /**
     * Group by ComponentRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentRequestGroupByArgs} args - Group by arguments.
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
      T extends ComponentRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComponentRequestGroupByArgs['orderBy'] }
        : { orderBy?: ComponentRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComponentRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComponentRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComponentRequest model
   */
  readonly fields: ComponentRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComponentRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComponentRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ComponentRequest model
   */
  interface ComponentRequestFieldRefs {
    readonly id: FieldRef<"ComponentRequest", 'Int'>
    readonly name: FieldRef<"ComponentRequest", 'String'>
    readonly brand: FieldRef<"ComponentRequest", 'String'>
    readonly modelNumber: FieldRef<"ComponentRequest", 'String'>
    readonly serialNumber: FieldRef<"ComponentRequest", 'String'>
    readonly createdAt: FieldRef<"ComponentRequest", 'DateTime'>
    readonly staffId: FieldRef<"ComponentRequest", 'Int'>
    readonly type: FieldRef<"ComponentRequest", 'String'>
    readonly status: FieldRef<"ComponentRequest", 'String'>
    readonly createdByStaffId: FieldRef<"ComponentRequest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ComponentRequest findUnique
   */
  export type ComponentRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentRequest
     */
    select?: ComponentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentRequest
     */
    omit?: ComponentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentRequestInclude<ExtArgs> | null
    /**
     * Filter, which ComponentRequest to fetch.
     */
    where: ComponentRequestWhereUniqueInput
  }

  /**
   * ComponentRequest findUniqueOrThrow
   */
  export type ComponentRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentRequest
     */
    select?: ComponentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentRequest
     */
    omit?: ComponentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentRequestInclude<ExtArgs> | null
    /**
     * Filter, which ComponentRequest to fetch.
     */
    where: ComponentRequestWhereUniqueInput
  }

  /**
   * ComponentRequest findFirst
   */
  export type ComponentRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentRequest
     */
    select?: ComponentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentRequest
     */
    omit?: ComponentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentRequestInclude<ExtArgs> | null
    /**
     * Filter, which ComponentRequest to fetch.
     */
    where?: ComponentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentRequests to fetch.
     */
    orderBy?: ComponentRequestOrderByWithRelationInput | ComponentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComponentRequests.
     */
    cursor?: ComponentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComponentRequests.
     */
    distinct?: ComponentRequestScalarFieldEnum | ComponentRequestScalarFieldEnum[]
  }

  /**
   * ComponentRequest findFirstOrThrow
   */
  export type ComponentRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentRequest
     */
    select?: ComponentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentRequest
     */
    omit?: ComponentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentRequestInclude<ExtArgs> | null
    /**
     * Filter, which ComponentRequest to fetch.
     */
    where?: ComponentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentRequests to fetch.
     */
    orderBy?: ComponentRequestOrderByWithRelationInput | ComponentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComponentRequests.
     */
    cursor?: ComponentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComponentRequests.
     */
    distinct?: ComponentRequestScalarFieldEnum | ComponentRequestScalarFieldEnum[]
  }

  /**
   * ComponentRequest findMany
   */
  export type ComponentRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentRequest
     */
    select?: ComponentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentRequest
     */
    omit?: ComponentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentRequestInclude<ExtArgs> | null
    /**
     * Filter, which ComponentRequests to fetch.
     */
    where?: ComponentRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentRequests to fetch.
     */
    orderBy?: ComponentRequestOrderByWithRelationInput | ComponentRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComponentRequests.
     */
    cursor?: ComponentRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentRequests.
     */
    skip?: number
    distinct?: ComponentRequestScalarFieldEnum | ComponentRequestScalarFieldEnum[]
  }

  /**
   * ComponentRequest create
   */
  export type ComponentRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentRequest
     */
    select?: ComponentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentRequest
     */
    omit?: ComponentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ComponentRequest.
     */
    data: XOR<ComponentRequestCreateInput, ComponentRequestUncheckedCreateInput>
  }

  /**
   * ComponentRequest createMany
   */
  export type ComponentRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComponentRequests.
     */
    data: ComponentRequestCreateManyInput | ComponentRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComponentRequest createManyAndReturn
   */
  export type ComponentRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentRequest
     */
    select?: ComponentRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentRequest
     */
    omit?: ComponentRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ComponentRequests.
     */
    data: ComponentRequestCreateManyInput | ComponentRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComponentRequest update
   */
  export type ComponentRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentRequest
     */
    select?: ComponentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentRequest
     */
    omit?: ComponentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ComponentRequest.
     */
    data: XOR<ComponentRequestUpdateInput, ComponentRequestUncheckedUpdateInput>
    /**
     * Choose, which ComponentRequest to update.
     */
    where: ComponentRequestWhereUniqueInput
  }

  /**
   * ComponentRequest updateMany
   */
  export type ComponentRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComponentRequests.
     */
    data: XOR<ComponentRequestUpdateManyMutationInput, ComponentRequestUncheckedUpdateManyInput>
    /**
     * Filter which ComponentRequests to update
     */
    where?: ComponentRequestWhereInput
    /**
     * Limit how many ComponentRequests to update.
     */
    limit?: number
  }

  /**
   * ComponentRequest updateManyAndReturn
   */
  export type ComponentRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentRequest
     */
    select?: ComponentRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentRequest
     */
    omit?: ComponentRequestOmit<ExtArgs> | null
    /**
     * The data used to update ComponentRequests.
     */
    data: XOR<ComponentRequestUpdateManyMutationInput, ComponentRequestUncheckedUpdateManyInput>
    /**
     * Filter which ComponentRequests to update
     */
    where?: ComponentRequestWhereInput
    /**
     * Limit how many ComponentRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ComponentRequest upsert
   */
  export type ComponentRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentRequest
     */
    select?: ComponentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentRequest
     */
    omit?: ComponentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ComponentRequest to update in case it exists.
     */
    where: ComponentRequestWhereUniqueInput
    /**
     * In case the ComponentRequest found by the `where` argument doesn't exist, create a new ComponentRequest with this data.
     */
    create: XOR<ComponentRequestCreateInput, ComponentRequestUncheckedCreateInput>
    /**
     * In case the ComponentRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComponentRequestUpdateInput, ComponentRequestUncheckedUpdateInput>
  }

  /**
   * ComponentRequest delete
   */
  export type ComponentRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentRequest
     */
    select?: ComponentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentRequest
     */
    omit?: ComponentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentRequestInclude<ExtArgs> | null
    /**
     * Filter which ComponentRequest to delete.
     */
    where: ComponentRequestWhereUniqueInput
  }

  /**
   * ComponentRequest deleteMany
   */
  export type ComponentRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComponentRequests to delete
     */
    where?: ComponentRequestWhereInput
    /**
     * Limit how many ComponentRequests to delete.
     */
    limit?: number
  }

  /**
   * ComponentRequest without action
   */
  export type ComponentRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentRequest
     */
    select?: ComponentRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ComponentRequest
     */
    omit?: ComponentRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentRequestInclude<ExtArgs> | null
  }


  /**
   * Model HOD
   */

  export type AggregateHOD = {
    _count: HODCountAggregateOutputType | null
    _avg: HODAvgAggregateOutputType | null
    _sum: HODSumAggregateOutputType | null
    _min: HODMinAggregateOutputType | null
    _max: HODMaxAggregateOutputType | null
  }

  export type HODAvgAggregateOutputType = {
    id: number | null
    collegeId: number | null
    adminId: number | null
  }

  export type HODSumAggregateOutputType = {
    id: number | null
    collegeId: number | null
    adminId: number | null
  }

  export type HODMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    collegeId: number | null
    adminId: number | null
    role: $Enums.Role | null
  }

  export type HODMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    collegeId: number | null
    adminId: number | null
    role: $Enums.Role | null
  }

  export type HODCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    collegeId: number
    adminId: number
    role: number
    _all: number
  }


  export type HODAvgAggregateInputType = {
    id?: true
    collegeId?: true
    adminId?: true
  }

  export type HODSumAggregateInputType = {
    id?: true
    collegeId?: true
    adminId?: true
  }

  export type HODMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    collegeId?: true
    adminId?: true
    role?: true
  }

  export type HODMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    collegeId?: true
    adminId?: true
    role?: true
  }

  export type HODCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    collegeId?: true
    adminId?: true
    role?: true
    _all?: true
  }

  export type HODAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HOD to aggregate.
     */
    where?: HODWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HODS to fetch.
     */
    orderBy?: HODOrderByWithRelationInput | HODOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HODWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HODS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HODS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HODS
    **/
    _count?: true | HODCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HODAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HODSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HODMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HODMaxAggregateInputType
  }

  export type GetHODAggregateType<T extends HODAggregateArgs> = {
        [P in keyof T & keyof AggregateHOD]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHOD[P]>
      : GetScalarType<T[P], AggregateHOD[P]>
  }




  export type HODGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HODWhereInput
    orderBy?: HODOrderByWithAggregationInput | HODOrderByWithAggregationInput[]
    by: HODScalarFieldEnum[] | HODScalarFieldEnum
    having?: HODScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HODCountAggregateInputType | true
    _avg?: HODAvgAggregateInputType
    _sum?: HODSumAggregateInputType
    _min?: HODMinAggregateInputType
    _max?: HODMaxAggregateInputType
  }

  export type HODGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    password: string
    collegeId: number
    adminId: number
    role: $Enums.Role
    _count: HODCountAggregateOutputType | null
    _avg: HODAvgAggregateOutputType | null
    _sum: HODSumAggregateOutputType | null
    _min: HODMinAggregateOutputType | null
    _max: HODMaxAggregateOutputType | null
  }

  type GetHODGroupByPayload<T extends HODGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HODGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HODGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HODGroupByOutputType[P]>
            : GetScalarType<T[P], HODGroupByOutputType[P]>
        }
      >
    >


  export type HODSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    collegeId?: boolean
    adminId?: boolean
    role?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    departments?: boolean | HOD$departmentsArgs<ExtArgs>
    Report?: boolean | HOD$ReportArgs<ExtArgs>
    _count?: boolean | HODCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hOD"]>

  export type HODSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    collegeId?: boolean
    adminId?: boolean
    role?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hOD"]>

  export type HODSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    collegeId?: boolean
    adminId?: boolean
    role?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hOD"]>

  export type HODSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    collegeId?: boolean
    adminId?: boolean
    role?: boolean
  }

  export type HODOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "collegeId" | "adminId" | "role", ExtArgs["result"]["hOD"]>
  export type HODInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    departments?: boolean | HOD$departmentsArgs<ExtArgs>
    Report?: boolean | HOD$ReportArgs<ExtArgs>
    _count?: boolean | HODCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HODIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type HODIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $HODPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HOD"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      college: Prisma.$CollegePayload<ExtArgs>
      departments: Prisma.$DepartmentPayload<ExtArgs>[]
      Report: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      password: string
      collegeId: number
      adminId: number
      role: $Enums.Role
    }, ExtArgs["result"]["hOD"]>
    composites: {}
  }

  type HODGetPayload<S extends boolean | null | undefined | HODDefaultArgs> = $Result.GetResult<Prisma.$HODPayload, S>

  type HODCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HODFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HODCountAggregateInputType | true
    }

  export interface HODDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HOD'], meta: { name: 'HOD' } }
    /**
     * Find zero or one HOD that matches the filter.
     * @param {HODFindUniqueArgs} args - Arguments to find a HOD
     * @example
     * // Get one HOD
     * const hOD = await prisma.hOD.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HODFindUniqueArgs>(args: SelectSubset<T, HODFindUniqueArgs<ExtArgs>>): Prisma__HODClient<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HOD that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HODFindUniqueOrThrowArgs} args - Arguments to find a HOD
     * @example
     * // Get one HOD
     * const hOD = await prisma.hOD.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HODFindUniqueOrThrowArgs>(args: SelectSubset<T, HODFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HODClient<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HOD that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HODFindFirstArgs} args - Arguments to find a HOD
     * @example
     * // Get one HOD
     * const hOD = await prisma.hOD.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HODFindFirstArgs>(args?: SelectSubset<T, HODFindFirstArgs<ExtArgs>>): Prisma__HODClient<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HOD that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HODFindFirstOrThrowArgs} args - Arguments to find a HOD
     * @example
     * // Get one HOD
     * const hOD = await prisma.hOD.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HODFindFirstOrThrowArgs>(args?: SelectSubset<T, HODFindFirstOrThrowArgs<ExtArgs>>): Prisma__HODClient<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HODS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HODFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HODS
     * const hODS = await prisma.hOD.findMany()
     * 
     * // Get first 10 HODS
     * const hODS = await prisma.hOD.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hODWithIdOnly = await prisma.hOD.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HODFindManyArgs>(args?: SelectSubset<T, HODFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HOD.
     * @param {HODCreateArgs} args - Arguments to create a HOD.
     * @example
     * // Create one HOD
     * const HOD = await prisma.hOD.create({
     *   data: {
     *     // ... data to create a HOD
     *   }
     * })
     * 
     */
    create<T extends HODCreateArgs>(args: SelectSubset<T, HODCreateArgs<ExtArgs>>): Prisma__HODClient<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HODS.
     * @param {HODCreateManyArgs} args - Arguments to create many HODS.
     * @example
     * // Create many HODS
     * const hOD = await prisma.hOD.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HODCreateManyArgs>(args?: SelectSubset<T, HODCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HODS and returns the data saved in the database.
     * @param {HODCreateManyAndReturnArgs} args - Arguments to create many HODS.
     * @example
     * // Create many HODS
     * const hOD = await prisma.hOD.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HODS and only return the `id`
     * const hODWithIdOnly = await prisma.hOD.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HODCreateManyAndReturnArgs>(args?: SelectSubset<T, HODCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HOD.
     * @param {HODDeleteArgs} args - Arguments to delete one HOD.
     * @example
     * // Delete one HOD
     * const HOD = await prisma.hOD.delete({
     *   where: {
     *     // ... filter to delete one HOD
     *   }
     * })
     * 
     */
    delete<T extends HODDeleteArgs>(args: SelectSubset<T, HODDeleteArgs<ExtArgs>>): Prisma__HODClient<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HOD.
     * @param {HODUpdateArgs} args - Arguments to update one HOD.
     * @example
     * // Update one HOD
     * const hOD = await prisma.hOD.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HODUpdateArgs>(args: SelectSubset<T, HODUpdateArgs<ExtArgs>>): Prisma__HODClient<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HODS.
     * @param {HODDeleteManyArgs} args - Arguments to filter HODS to delete.
     * @example
     * // Delete a few HODS
     * const { count } = await prisma.hOD.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HODDeleteManyArgs>(args?: SelectSubset<T, HODDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HODS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HODUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HODS
     * const hOD = await prisma.hOD.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HODUpdateManyArgs>(args: SelectSubset<T, HODUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HODS and returns the data updated in the database.
     * @param {HODUpdateManyAndReturnArgs} args - Arguments to update many HODS.
     * @example
     * // Update many HODS
     * const hOD = await prisma.hOD.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HODS and only return the `id`
     * const hODWithIdOnly = await prisma.hOD.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HODUpdateManyAndReturnArgs>(args: SelectSubset<T, HODUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HOD.
     * @param {HODUpsertArgs} args - Arguments to update or create a HOD.
     * @example
     * // Update or create a HOD
     * const hOD = await prisma.hOD.upsert({
     *   create: {
     *     // ... data to create a HOD
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HOD we want to update
     *   }
     * })
     */
    upsert<T extends HODUpsertArgs>(args: SelectSubset<T, HODUpsertArgs<ExtArgs>>): Prisma__HODClient<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HODS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HODCountArgs} args - Arguments to filter HODS to count.
     * @example
     * // Count the number of HODS
     * const count = await prisma.hOD.count({
     *   where: {
     *     // ... the filter for the HODS we want to count
     *   }
     * })
    **/
    count<T extends HODCountArgs>(
      args?: Subset<T, HODCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HODCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HOD.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HODAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HODAggregateArgs>(args: Subset<T, HODAggregateArgs>): Prisma.PrismaPromise<GetHODAggregateType<T>>

    /**
     * Group by HOD.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HODGroupByArgs} args - Group by arguments.
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
      T extends HODGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HODGroupByArgs['orderBy'] }
        : { orderBy?: HODGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HODGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHODGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HOD model
   */
  readonly fields: HODFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HOD.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HODClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    departments<T extends HOD$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, HOD$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Report<T extends HOD$ReportArgs<ExtArgs> = {}>(args?: Subset<T, HOD$ReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the HOD model
   */
  interface HODFieldRefs {
    readonly id: FieldRef<"HOD", 'Int'>
    readonly name: FieldRef<"HOD", 'String'>
    readonly email: FieldRef<"HOD", 'String'>
    readonly phone: FieldRef<"HOD", 'String'>
    readonly password: FieldRef<"HOD", 'String'>
    readonly collegeId: FieldRef<"HOD", 'Int'>
    readonly adminId: FieldRef<"HOD", 'Int'>
    readonly role: FieldRef<"HOD", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * HOD findUnique
   */
  export type HODFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODInclude<ExtArgs> | null
    /**
     * Filter, which HOD to fetch.
     */
    where: HODWhereUniqueInput
  }

  /**
   * HOD findUniqueOrThrow
   */
  export type HODFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODInclude<ExtArgs> | null
    /**
     * Filter, which HOD to fetch.
     */
    where: HODWhereUniqueInput
  }

  /**
   * HOD findFirst
   */
  export type HODFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODInclude<ExtArgs> | null
    /**
     * Filter, which HOD to fetch.
     */
    where?: HODWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HODS to fetch.
     */
    orderBy?: HODOrderByWithRelationInput | HODOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HODS.
     */
    cursor?: HODWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HODS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HODS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HODS.
     */
    distinct?: HODScalarFieldEnum | HODScalarFieldEnum[]
  }

  /**
   * HOD findFirstOrThrow
   */
  export type HODFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODInclude<ExtArgs> | null
    /**
     * Filter, which HOD to fetch.
     */
    where?: HODWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HODS to fetch.
     */
    orderBy?: HODOrderByWithRelationInput | HODOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HODS.
     */
    cursor?: HODWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HODS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HODS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HODS.
     */
    distinct?: HODScalarFieldEnum | HODScalarFieldEnum[]
  }

  /**
   * HOD findMany
   */
  export type HODFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODInclude<ExtArgs> | null
    /**
     * Filter, which HODS to fetch.
     */
    where?: HODWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HODS to fetch.
     */
    orderBy?: HODOrderByWithRelationInput | HODOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HODS.
     */
    cursor?: HODWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HODS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HODS.
     */
    skip?: number
    distinct?: HODScalarFieldEnum | HODScalarFieldEnum[]
  }

  /**
   * HOD create
   */
  export type HODCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODInclude<ExtArgs> | null
    /**
     * The data needed to create a HOD.
     */
    data: XOR<HODCreateInput, HODUncheckedCreateInput>
  }

  /**
   * HOD createMany
   */
  export type HODCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HODS.
     */
    data: HODCreateManyInput | HODCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HOD createManyAndReturn
   */
  export type HODCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * The data used to create many HODS.
     */
    data: HODCreateManyInput | HODCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HOD update
   */
  export type HODUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODInclude<ExtArgs> | null
    /**
     * The data needed to update a HOD.
     */
    data: XOR<HODUpdateInput, HODUncheckedUpdateInput>
    /**
     * Choose, which HOD to update.
     */
    where: HODWhereUniqueInput
  }

  /**
   * HOD updateMany
   */
  export type HODUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HODS.
     */
    data: XOR<HODUpdateManyMutationInput, HODUncheckedUpdateManyInput>
    /**
     * Filter which HODS to update
     */
    where?: HODWhereInput
    /**
     * Limit how many HODS to update.
     */
    limit?: number
  }

  /**
   * HOD updateManyAndReturn
   */
  export type HODUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * The data used to update HODS.
     */
    data: XOR<HODUpdateManyMutationInput, HODUncheckedUpdateManyInput>
    /**
     * Filter which HODS to update
     */
    where?: HODWhereInput
    /**
     * Limit how many HODS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HOD upsert
   */
  export type HODUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODInclude<ExtArgs> | null
    /**
     * The filter to search for the HOD to update in case it exists.
     */
    where: HODWhereUniqueInput
    /**
     * In case the HOD found by the `where` argument doesn't exist, create a new HOD with this data.
     */
    create: XOR<HODCreateInput, HODUncheckedCreateInput>
    /**
     * In case the HOD was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HODUpdateInput, HODUncheckedUpdateInput>
  }

  /**
   * HOD delete
   */
  export type HODDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODInclude<ExtArgs> | null
    /**
     * Filter which HOD to delete.
     */
    where: HODWhereUniqueInput
  }

  /**
   * HOD deleteMany
   */
  export type HODDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HODS to delete
     */
    where?: HODWhereInput
    /**
     * Limit how many HODS to delete.
     */
    limit?: number
  }

  /**
   * HOD.departments
   */
  export type HOD$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * HOD.Report
   */
  export type HOD$ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * HOD without action
   */
  export type HODDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODInclude<ExtArgs> | null
  }


  /**
   * Model Lab
   */

  export type AggregateLab = {
    _count: LabCountAggregateOutputType | null
    _avg: LabAvgAggregateOutputType | null
    _sum: LabSumAggregateOutputType | null
    _min: LabMinAggregateOutputType | null
    _max: LabMaxAggregateOutputType | null
  }

  export type LabAvgAggregateOutputType = {
    id: number | null
    departmentId: number | null
    adminId: number | null
  }

  export type LabSumAggregateOutputType = {
    id: number | null
    departmentId: number | null
    adminId: number | null
  }

  export type LabMinAggregateOutputType = {
    id: number | null
    name: string | null
    departmentId: number | null
    adminId: number | null
  }

  export type LabMaxAggregateOutputType = {
    id: number | null
    name: string | null
    departmentId: number | null
    adminId: number | null
  }

  export type LabCountAggregateOutputType = {
    id: number
    name: number
    departmentId: number
    adminId: number
    _all: number
  }


  export type LabAvgAggregateInputType = {
    id?: true
    departmentId?: true
    adminId?: true
  }

  export type LabSumAggregateInputType = {
    id?: true
    departmentId?: true
    adminId?: true
  }

  export type LabMinAggregateInputType = {
    id?: true
    name?: true
    departmentId?: true
    adminId?: true
  }

  export type LabMaxAggregateInputType = {
    id?: true
    name?: true
    departmentId?: true
    adminId?: true
  }

  export type LabCountAggregateInputType = {
    id?: true
    name?: true
    departmentId?: true
    adminId?: true
    _all?: true
  }

  export type LabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lab to aggregate.
     */
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     */
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Labs
    **/
    _count?: true | LabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabMaxAggregateInputType
  }

  export type GetLabAggregateType<T extends LabAggregateArgs> = {
        [P in keyof T & keyof AggregateLab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLab[P]>
      : GetScalarType<T[P], AggregateLab[P]>
  }




  export type LabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabWhereInput
    orderBy?: LabOrderByWithAggregationInput | LabOrderByWithAggregationInput[]
    by: LabScalarFieldEnum[] | LabScalarFieldEnum
    having?: LabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabCountAggregateInputType | true
    _avg?: LabAvgAggregateInputType
    _sum?: LabSumAggregateInputType
    _min?: LabMinAggregateInputType
    _max?: LabMaxAggregateInputType
  }

  export type LabGroupByOutputType = {
    id: number
    name: string
    departmentId: number
    adminId: number | null
    _count: LabCountAggregateOutputType | null
    _avg: LabAvgAggregateOutputType | null
    _sum: LabSumAggregateOutputType | null
    _min: LabMinAggregateOutputType | null
    _max: LabMaxAggregateOutputType | null
  }

  type GetLabGroupByPayload<T extends LabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabGroupByOutputType[P]>
            : GetScalarType<T[P], LabGroupByOutputType[P]>
        }
      >
    >


  export type LabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentId?: boolean
    adminId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    admin?: boolean | Lab$adminArgs<ExtArgs>
    components?: boolean | Lab$componentsArgs<ExtArgs>
    _count?: boolean | LabCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lab"]>

  export type LabSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentId?: boolean
    adminId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    admin?: boolean | Lab$adminArgs<ExtArgs>
  }, ExtArgs["result"]["lab"]>

  export type LabSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentId?: boolean
    adminId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    admin?: boolean | Lab$adminArgs<ExtArgs>
  }, ExtArgs["result"]["lab"]>

  export type LabSelectScalar = {
    id?: boolean
    name?: boolean
    departmentId?: boolean
    adminId?: boolean
  }

  export type LabOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "departmentId" | "adminId", ExtArgs["result"]["lab"]>
  export type LabInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    admin?: boolean | Lab$adminArgs<ExtArgs>
    components?: boolean | Lab$componentsArgs<ExtArgs>
    _count?: boolean | LabCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LabIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    admin?: boolean | Lab$adminArgs<ExtArgs>
  }
  export type LabIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    admin?: boolean | Lab$adminArgs<ExtArgs>
  }

  export type $LabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lab"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      admin: Prisma.$AdminPayload<ExtArgs> | null
      components: Prisma.$ComponentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      departmentId: number
      adminId: number | null
    }, ExtArgs["result"]["lab"]>
    composites: {}
  }

  type LabGetPayload<S extends boolean | null | undefined | LabDefaultArgs> = $Result.GetResult<Prisma.$LabPayload, S>

  type LabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabCountAggregateInputType | true
    }

  export interface LabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lab'], meta: { name: 'Lab' } }
    /**
     * Find zero or one Lab that matches the filter.
     * @param {LabFindUniqueArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabFindUniqueArgs>(args: SelectSubset<T, LabFindUniqueArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabFindUniqueOrThrowArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabFindUniqueOrThrowArgs>(args: SelectSubset<T, LabFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabFindFirstArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabFindFirstArgs>(args?: SelectSubset<T, LabFindFirstArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabFindFirstOrThrowArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabFindFirstOrThrowArgs>(args?: SelectSubset<T, LabFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Labs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Labs
     * const labs = await prisma.lab.findMany()
     * 
     * // Get first 10 Labs
     * const labs = await prisma.lab.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labWithIdOnly = await prisma.lab.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabFindManyArgs>(args?: SelectSubset<T, LabFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lab.
     * @param {LabCreateArgs} args - Arguments to create a Lab.
     * @example
     * // Create one Lab
     * const Lab = await prisma.lab.create({
     *   data: {
     *     // ... data to create a Lab
     *   }
     * })
     * 
     */
    create<T extends LabCreateArgs>(args: SelectSubset<T, LabCreateArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Labs.
     * @param {LabCreateManyArgs} args - Arguments to create many Labs.
     * @example
     * // Create many Labs
     * const lab = await prisma.lab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabCreateManyArgs>(args?: SelectSubset<T, LabCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Labs and returns the data saved in the database.
     * @param {LabCreateManyAndReturnArgs} args - Arguments to create many Labs.
     * @example
     * // Create many Labs
     * const lab = await prisma.lab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Labs and only return the `id`
     * const labWithIdOnly = await prisma.lab.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabCreateManyAndReturnArgs>(args?: SelectSubset<T, LabCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lab.
     * @param {LabDeleteArgs} args - Arguments to delete one Lab.
     * @example
     * // Delete one Lab
     * const Lab = await prisma.lab.delete({
     *   where: {
     *     // ... filter to delete one Lab
     *   }
     * })
     * 
     */
    delete<T extends LabDeleteArgs>(args: SelectSubset<T, LabDeleteArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lab.
     * @param {LabUpdateArgs} args - Arguments to update one Lab.
     * @example
     * // Update one Lab
     * const lab = await prisma.lab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabUpdateArgs>(args: SelectSubset<T, LabUpdateArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Labs.
     * @param {LabDeleteManyArgs} args - Arguments to filter Labs to delete.
     * @example
     * // Delete a few Labs
     * const { count } = await prisma.lab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabDeleteManyArgs>(args?: SelectSubset<T, LabDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Labs
     * const lab = await prisma.lab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabUpdateManyArgs>(args: SelectSubset<T, LabUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labs and returns the data updated in the database.
     * @param {LabUpdateManyAndReturnArgs} args - Arguments to update many Labs.
     * @example
     * // Update many Labs
     * const lab = await prisma.lab.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Labs and only return the `id`
     * const labWithIdOnly = await prisma.lab.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LabUpdateManyAndReturnArgs>(args: SelectSubset<T, LabUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lab.
     * @param {LabUpsertArgs} args - Arguments to update or create a Lab.
     * @example
     * // Update or create a Lab
     * const lab = await prisma.lab.upsert({
     *   create: {
     *     // ... data to create a Lab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lab we want to update
     *   }
     * })
     */
    upsert<T extends LabUpsertArgs>(args: SelectSubset<T, LabUpsertArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabCountArgs} args - Arguments to filter Labs to count.
     * @example
     * // Count the number of Labs
     * const count = await prisma.lab.count({
     *   where: {
     *     // ... the filter for the Labs we want to count
     *   }
     * })
    **/
    count<T extends LabCountArgs>(
      args?: Subset<T, LabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabAggregateArgs>(args: Subset<T, LabAggregateArgs>): Prisma.PrismaPromise<GetLabAggregateType<T>>

    /**
     * Group by Lab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabGroupByArgs} args - Group by arguments.
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
      T extends LabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabGroupByArgs['orderBy'] }
        : { orderBy?: LabGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lab model
   */
  readonly fields: LabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends Lab$adminArgs<ExtArgs> = {}>(args?: Subset<T, Lab$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    components<T extends Lab$componentsArgs<ExtArgs> = {}>(args?: Subset<T, Lab$componentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lab model
   */
  interface LabFieldRefs {
    readonly id: FieldRef<"Lab", 'Int'>
    readonly name: FieldRef<"Lab", 'String'>
    readonly departmentId: FieldRef<"Lab", 'Int'>
    readonly adminId: FieldRef<"Lab", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Lab findUnique
   */
  export type LabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Lab to fetch.
     */
    where: LabWhereUniqueInput
  }

  /**
   * Lab findUniqueOrThrow
   */
  export type LabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Lab to fetch.
     */
    where: LabWhereUniqueInput
  }

  /**
   * Lab findFirst
   */
  export type LabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Lab to fetch.
     */
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     */
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labs.
     */
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labs.
     */
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * Lab findFirstOrThrow
   */
  export type LabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Lab to fetch.
     */
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     */
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labs.
     */
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labs.
     */
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * Lab findMany
   */
  export type LabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter, which Labs to fetch.
     */
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     */
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Labs.
     */
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     */
    skip?: number
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * Lab create
   */
  export type LabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * The data needed to create a Lab.
     */
    data: XOR<LabCreateInput, LabUncheckedCreateInput>
  }

  /**
   * Lab createMany
   */
  export type LabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Labs.
     */
    data: LabCreateManyInput | LabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lab createManyAndReturn
   */
  export type LabCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * The data used to create many Labs.
     */
    data: LabCreateManyInput | LabCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lab update
   */
  export type LabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * The data needed to update a Lab.
     */
    data: XOR<LabUpdateInput, LabUncheckedUpdateInput>
    /**
     * Choose, which Lab to update.
     */
    where: LabWhereUniqueInput
  }

  /**
   * Lab updateMany
   */
  export type LabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Labs.
     */
    data: XOR<LabUpdateManyMutationInput, LabUncheckedUpdateManyInput>
    /**
     * Filter which Labs to update
     */
    where?: LabWhereInput
    /**
     * Limit how many Labs to update.
     */
    limit?: number
  }

  /**
   * Lab updateManyAndReturn
   */
  export type LabUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * The data used to update Labs.
     */
    data: XOR<LabUpdateManyMutationInput, LabUncheckedUpdateManyInput>
    /**
     * Filter which Labs to update
     */
    where?: LabWhereInput
    /**
     * Limit how many Labs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lab upsert
   */
  export type LabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * The filter to search for the Lab to update in case it exists.
     */
    where: LabWhereUniqueInput
    /**
     * In case the Lab found by the `where` argument doesn't exist, create a new Lab with this data.
     */
    create: XOR<LabCreateInput, LabUncheckedCreateInput>
    /**
     * In case the Lab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabUpdateInput, LabUncheckedUpdateInput>
  }

  /**
   * Lab delete
   */
  export type LabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    /**
     * Filter which Lab to delete.
     */
    where: LabWhereUniqueInput
  }

  /**
   * Lab deleteMany
   */
  export type LabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Labs to delete
     */
    where?: LabWhereInput
    /**
     * Limit how many Labs to delete.
     */
    limit?: number
  }

  /**
   * Lab.admin
   */
  export type Lab$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Lab.components
   */
  export type Lab$componentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    where?: ComponentWhereInput
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    cursor?: ComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }

  /**
   * Lab without action
   */
  export type LabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
  }


  /**
   * Model Component
   */

  export type AggregateComponent = {
    _count: ComponentCountAggregateOutputType | null
    _avg: ComponentAvgAggregateOutputType | null
    _sum: ComponentSumAggregateOutputType | null
    _min: ComponentMinAggregateOutputType | null
    _max: ComponentMaxAggregateOutputType | null
  }

  export type ComponentAvgAggregateOutputType = {
    id: number | null
    collegeId: number | null
    warehouseId: number | null
    adminId: number | null
    labId: number | null
  }

  export type ComponentSumAggregateOutputType = {
    id: number | null
    collegeId: number | null
    warehouseId: number | null
    adminId: number | null
    labId: number | null
  }

  export type ComponentMinAggregateOutputType = {
    id: number | null
    name: string | null
    brand: string | null
    modelNumber: string | null
    serialNumber: string | null
    collegeId: number | null
    warehouseId: number | null
    adminId: number | null
    labId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.Status | null
    type: $Enums.ComponentType | null
  }

  export type ComponentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    brand: string | null
    modelNumber: string | null
    serialNumber: string | null
    collegeId: number | null
    warehouseId: number | null
    adminId: number | null
    labId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.Status | null
    type: $Enums.ComponentType | null
  }

  export type ComponentCountAggregateOutputType = {
    id: number
    name: number
    brand: number
    modelNumber: number
    serialNumber: number
    collegeId: number
    warehouseId: number
    adminId: number
    labId: number
    createdAt: number
    updatedAt: number
    status: number
    type: number
    _all: number
  }


  export type ComponentAvgAggregateInputType = {
    id?: true
    collegeId?: true
    warehouseId?: true
    adminId?: true
    labId?: true
  }

  export type ComponentSumAggregateInputType = {
    id?: true
    collegeId?: true
    warehouseId?: true
    adminId?: true
    labId?: true
  }

  export type ComponentMinAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    modelNumber?: true
    serialNumber?: true
    collegeId?: true
    warehouseId?: true
    adminId?: true
    labId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    type?: true
  }

  export type ComponentMaxAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    modelNumber?: true
    serialNumber?: true
    collegeId?: true
    warehouseId?: true
    adminId?: true
    labId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    type?: true
  }

  export type ComponentCountAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    modelNumber?: true
    serialNumber?: true
    collegeId?: true
    warehouseId?: true
    adminId?: true
    labId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    type?: true
    _all?: true
  }

  export type ComponentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Component to aggregate.
     */
    where?: ComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Components to fetch.
     */
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Components from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Components.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Components
    **/
    _count?: true | ComponentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComponentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComponentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComponentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComponentMaxAggregateInputType
  }

  export type GetComponentAggregateType<T extends ComponentAggregateArgs> = {
        [P in keyof T & keyof AggregateComponent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComponent[P]>
      : GetScalarType<T[P], AggregateComponent[P]>
  }




  export type ComponentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentWhereInput
    orderBy?: ComponentOrderByWithAggregationInput | ComponentOrderByWithAggregationInput[]
    by: ComponentScalarFieldEnum[] | ComponentScalarFieldEnum
    having?: ComponentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComponentCountAggregateInputType | true
    _avg?: ComponentAvgAggregateInputType
    _sum?: ComponentSumAggregateInputType
    _min?: ComponentMinAggregateInputType
    _max?: ComponentMaxAggregateInputType
  }

  export type ComponentGroupByOutputType = {
    id: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    collegeId: number
    warehouseId: number
    adminId: number
    labId: number
    createdAt: Date
    updatedAt: Date
    status: $Enums.Status
    type: $Enums.ComponentType
    _count: ComponentCountAggregateOutputType | null
    _avg: ComponentAvgAggregateOutputType | null
    _sum: ComponentSumAggregateOutputType | null
    _min: ComponentMinAggregateOutputType | null
    _max: ComponentMaxAggregateOutputType | null
  }

  type GetComponentGroupByPayload<T extends ComponentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComponentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComponentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComponentGroupByOutputType[P]>
            : GetScalarType<T[P], ComponentGroupByOutputType[P]>
        }
      >
    >


  export type ComponentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    modelNumber?: boolean
    serialNumber?: boolean
    collegeId?: boolean
    warehouseId?: boolean
    adminId?: boolean
    labId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    type?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    lab?: boolean | LabDefaultArgs<ExtArgs>
    Report?: boolean | Component$ReportArgs<ExtArgs>
    Department?: boolean | Component$DepartmentArgs<ExtArgs>
    _count?: boolean | ComponentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["component"]>

  export type ComponentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    modelNumber?: boolean
    serialNumber?: boolean
    collegeId?: boolean
    warehouseId?: boolean
    adminId?: boolean
    labId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    type?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    lab?: boolean | LabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["component"]>

  export type ComponentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    modelNumber?: boolean
    serialNumber?: boolean
    collegeId?: boolean
    warehouseId?: boolean
    adminId?: boolean
    labId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    type?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    lab?: boolean | LabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["component"]>

  export type ComponentSelectScalar = {
    id?: boolean
    name?: boolean
    brand?: boolean
    modelNumber?: boolean
    serialNumber?: boolean
    collegeId?: boolean
    warehouseId?: boolean
    adminId?: boolean
    labId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    type?: boolean
  }

  export type ComponentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brand" | "modelNumber" | "serialNumber" | "collegeId" | "warehouseId" | "adminId" | "labId" | "createdAt" | "updatedAt" | "status" | "type", ExtArgs["result"]["component"]>
  export type ComponentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    lab?: boolean | LabDefaultArgs<ExtArgs>
    Report?: boolean | Component$ReportArgs<ExtArgs>
    Department?: boolean | Component$DepartmentArgs<ExtArgs>
    _count?: boolean | ComponentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ComponentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    lab?: boolean | LabDefaultArgs<ExtArgs>
  }
  export type ComponentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    warehouse?: boolean | WarehouseDefaultArgs<ExtArgs>
    lab?: boolean | LabDefaultArgs<ExtArgs>
  }

  export type $ComponentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Component"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      college: Prisma.$CollegePayload<ExtArgs>
      warehouse: Prisma.$WarehousePayload<ExtArgs>
      lab: Prisma.$LabPayload<ExtArgs>
      Report: Prisma.$ReportPayload<ExtArgs>[]
      Department: Prisma.$DepartmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      brand: string
      modelNumber: string
      serialNumber: string
      collegeId: number
      warehouseId: number
      adminId: number
      labId: number
      createdAt: Date
      updatedAt: Date
      status: $Enums.Status
      type: $Enums.ComponentType
    }, ExtArgs["result"]["component"]>
    composites: {}
  }

  type ComponentGetPayload<S extends boolean | null | undefined | ComponentDefaultArgs> = $Result.GetResult<Prisma.$ComponentPayload, S>

  type ComponentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComponentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComponentCountAggregateInputType | true
    }

  export interface ComponentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Component'], meta: { name: 'Component' } }
    /**
     * Find zero or one Component that matches the filter.
     * @param {ComponentFindUniqueArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComponentFindUniqueArgs>(args: SelectSubset<T, ComponentFindUniqueArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Component that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComponentFindUniqueOrThrowArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComponentFindUniqueOrThrowArgs>(args: SelectSubset<T, ComponentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Component that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentFindFirstArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComponentFindFirstArgs>(args?: SelectSubset<T, ComponentFindFirstArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Component that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentFindFirstOrThrowArgs} args - Arguments to find a Component
     * @example
     * // Get one Component
     * const component = await prisma.component.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComponentFindFirstOrThrowArgs>(args?: SelectSubset<T, ComponentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Components that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Components
     * const components = await prisma.component.findMany()
     * 
     * // Get first 10 Components
     * const components = await prisma.component.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const componentWithIdOnly = await prisma.component.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ComponentFindManyArgs>(args?: SelectSubset<T, ComponentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Component.
     * @param {ComponentCreateArgs} args - Arguments to create a Component.
     * @example
     * // Create one Component
     * const Component = await prisma.component.create({
     *   data: {
     *     // ... data to create a Component
     *   }
     * })
     * 
     */
    create<T extends ComponentCreateArgs>(args: SelectSubset<T, ComponentCreateArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Components.
     * @param {ComponentCreateManyArgs} args - Arguments to create many Components.
     * @example
     * // Create many Components
     * const component = await prisma.component.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComponentCreateManyArgs>(args?: SelectSubset<T, ComponentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Components and returns the data saved in the database.
     * @param {ComponentCreateManyAndReturnArgs} args - Arguments to create many Components.
     * @example
     * // Create many Components
     * const component = await prisma.component.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Components and only return the `id`
     * const componentWithIdOnly = await prisma.component.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComponentCreateManyAndReturnArgs>(args?: SelectSubset<T, ComponentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Component.
     * @param {ComponentDeleteArgs} args - Arguments to delete one Component.
     * @example
     * // Delete one Component
     * const Component = await prisma.component.delete({
     *   where: {
     *     // ... filter to delete one Component
     *   }
     * })
     * 
     */
    delete<T extends ComponentDeleteArgs>(args: SelectSubset<T, ComponentDeleteArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Component.
     * @param {ComponentUpdateArgs} args - Arguments to update one Component.
     * @example
     * // Update one Component
     * const component = await prisma.component.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComponentUpdateArgs>(args: SelectSubset<T, ComponentUpdateArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Components.
     * @param {ComponentDeleteManyArgs} args - Arguments to filter Components to delete.
     * @example
     * // Delete a few Components
     * const { count } = await prisma.component.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComponentDeleteManyArgs>(args?: SelectSubset<T, ComponentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Components.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Components
     * const component = await prisma.component.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComponentUpdateManyArgs>(args: SelectSubset<T, ComponentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Components and returns the data updated in the database.
     * @param {ComponentUpdateManyAndReturnArgs} args - Arguments to update many Components.
     * @example
     * // Update many Components
     * const component = await prisma.component.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Components and only return the `id`
     * const componentWithIdOnly = await prisma.component.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ComponentUpdateManyAndReturnArgs>(args: SelectSubset<T, ComponentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Component.
     * @param {ComponentUpsertArgs} args - Arguments to update or create a Component.
     * @example
     * // Update or create a Component
     * const component = await prisma.component.upsert({
     *   create: {
     *     // ... data to create a Component
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Component we want to update
     *   }
     * })
     */
    upsert<T extends ComponentUpsertArgs>(args: SelectSubset<T, ComponentUpsertArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Components.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentCountArgs} args - Arguments to filter Components to count.
     * @example
     * // Count the number of Components
     * const count = await prisma.component.count({
     *   where: {
     *     // ... the filter for the Components we want to count
     *   }
     * })
    **/
    count<T extends ComponentCountArgs>(
      args?: Subset<T, ComponentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComponentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Component.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComponentAggregateArgs>(args: Subset<T, ComponentAggregateArgs>): Prisma.PrismaPromise<GetComponentAggregateType<T>>

    /**
     * Group by Component.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentGroupByArgs} args - Group by arguments.
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
      T extends ComponentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComponentGroupByArgs['orderBy'] }
        : { orderBy?: ComponentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComponentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Component model
   */
  readonly fields: ComponentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Component.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComponentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends WarehouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehouseDefaultArgs<ExtArgs>>): Prisma__WarehouseClient<$Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lab<T extends LabDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabDefaultArgs<ExtArgs>>): Prisma__LabClient<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Report<T extends Component$ReportArgs<ExtArgs> = {}>(args?: Subset<T, Component$ReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Department<T extends Component$DepartmentArgs<ExtArgs> = {}>(args?: Subset<T, Component$DepartmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Component model
   */
  interface ComponentFieldRefs {
    readonly id: FieldRef<"Component", 'Int'>
    readonly name: FieldRef<"Component", 'String'>
    readonly brand: FieldRef<"Component", 'String'>
    readonly modelNumber: FieldRef<"Component", 'String'>
    readonly serialNumber: FieldRef<"Component", 'String'>
    readonly collegeId: FieldRef<"Component", 'Int'>
    readonly warehouseId: FieldRef<"Component", 'Int'>
    readonly adminId: FieldRef<"Component", 'Int'>
    readonly labId: FieldRef<"Component", 'Int'>
    readonly createdAt: FieldRef<"Component", 'DateTime'>
    readonly updatedAt: FieldRef<"Component", 'DateTime'>
    readonly status: FieldRef<"Component", 'Status'>
    readonly type: FieldRef<"Component", 'ComponentType'>
  }
    

  // Custom InputTypes
  /**
   * Component findUnique
   */
  export type ComponentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * Filter, which Component to fetch.
     */
    where: ComponentWhereUniqueInput
  }

  /**
   * Component findUniqueOrThrow
   */
  export type ComponentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * Filter, which Component to fetch.
     */
    where: ComponentWhereUniqueInput
  }

  /**
   * Component findFirst
   */
  export type ComponentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * Filter, which Component to fetch.
     */
    where?: ComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Components to fetch.
     */
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Components.
     */
    cursor?: ComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Components from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Components.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Components.
     */
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }

  /**
   * Component findFirstOrThrow
   */
  export type ComponentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * Filter, which Component to fetch.
     */
    where?: ComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Components to fetch.
     */
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Components.
     */
    cursor?: ComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Components from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Components.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Components.
     */
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }

  /**
   * Component findMany
   */
  export type ComponentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * Filter, which Components to fetch.
     */
    where?: ComponentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Components to fetch.
     */
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Components.
     */
    cursor?: ComponentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Components from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Components.
     */
    skip?: number
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }

  /**
   * Component create
   */
  export type ComponentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * The data needed to create a Component.
     */
    data: XOR<ComponentCreateInput, ComponentUncheckedCreateInput>
  }

  /**
   * Component createMany
   */
  export type ComponentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Components.
     */
    data: ComponentCreateManyInput | ComponentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Component createManyAndReturn
   */
  export type ComponentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * The data used to create many Components.
     */
    data: ComponentCreateManyInput | ComponentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Component update
   */
  export type ComponentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * The data needed to update a Component.
     */
    data: XOR<ComponentUpdateInput, ComponentUncheckedUpdateInput>
    /**
     * Choose, which Component to update.
     */
    where: ComponentWhereUniqueInput
  }

  /**
   * Component updateMany
   */
  export type ComponentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Components.
     */
    data: XOR<ComponentUpdateManyMutationInput, ComponentUncheckedUpdateManyInput>
    /**
     * Filter which Components to update
     */
    where?: ComponentWhereInput
    /**
     * Limit how many Components to update.
     */
    limit?: number
  }

  /**
   * Component updateManyAndReturn
   */
  export type ComponentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * The data used to update Components.
     */
    data: XOR<ComponentUpdateManyMutationInput, ComponentUncheckedUpdateManyInput>
    /**
     * Filter which Components to update
     */
    where?: ComponentWhereInput
    /**
     * Limit how many Components to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Component upsert
   */
  export type ComponentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * The filter to search for the Component to update in case it exists.
     */
    where: ComponentWhereUniqueInput
    /**
     * In case the Component found by the `where` argument doesn't exist, create a new Component with this data.
     */
    create: XOR<ComponentCreateInput, ComponentUncheckedCreateInput>
    /**
     * In case the Component was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComponentUpdateInput, ComponentUncheckedUpdateInput>
  }

  /**
   * Component delete
   */
  export type ComponentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    /**
     * Filter which Component to delete.
     */
    where: ComponentWhereUniqueInput
  }

  /**
   * Component deleteMany
   */
  export type ComponentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Components to delete
     */
    where?: ComponentWhereInput
    /**
     * Limit how many Components to delete.
     */
    limit?: number
  }

  /**
   * Component.Report
   */
  export type Component$ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Component.Department
   */
  export type Component$DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Component without action
   */
  export type ComponentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    id: number | null
    collegeId: number | null
    adminId: number | null
    hodId: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    id: number | null
    collegeId: number | null
    adminId: number | null
    hodId: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: number | null
    name: string | null
    departmentId: string | null
    collegeId: number | null
    adminId: number | null
    hodId: number | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    departmentId: string | null
    collegeId: number | null
    adminId: number | null
    hodId: number | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    departmentId: number
    collegeId: number
    adminId: number
    hodId: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    id?: true
    collegeId?: true
    adminId?: true
    hodId?: true
  }

  export type DepartmentSumAggregateInputType = {
    id?: true
    collegeId?: true
    adminId?: true
    hodId?: true
  }

  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    departmentId?: true
    collegeId?: true
    adminId?: true
    hodId?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    departmentId?: true
    collegeId?: true
    adminId?: true
    hodId?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    departmentId?: true
    collegeId?: true
    adminId?: true
    hodId?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: number
    name: string
    departmentId: string
    collegeId: number
    adminId: number
    hodId: number | null
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentId?: boolean
    collegeId?: boolean
    adminId?: boolean
    hodId?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    hod?: boolean | Department$hodArgs<ExtArgs>
    Lab?: boolean | Department$LabArgs<ExtArgs>
    components?: boolean | Department$componentsArgs<ExtArgs>
    Report?: boolean | Department$ReportArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentId?: boolean
    collegeId?: boolean
    adminId?: boolean
    hodId?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    hod?: boolean | Department$hodArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    departmentId?: boolean
    collegeId?: boolean
    adminId?: boolean
    hodId?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    hod?: boolean | Department$hodArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    departmentId?: boolean
    collegeId?: boolean
    adminId?: boolean
    hodId?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "departmentId" | "collegeId" | "adminId" | "hodId", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    hod?: boolean | Department$hodArgs<ExtArgs>
    Lab?: boolean | Department$LabArgs<ExtArgs>
    components?: boolean | Department$componentsArgs<ExtArgs>
    Report?: boolean | Department$ReportArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    hod?: boolean | Department$hodArgs<ExtArgs>
  }
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    college?: boolean | CollegeDefaultArgs<ExtArgs>
    hod?: boolean | Department$hodArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      college: Prisma.$CollegePayload<ExtArgs>
      hod: Prisma.$HODPayload<ExtArgs> | null
      Lab: Prisma.$LabPayload<ExtArgs>[]
      components: Prisma.$ComponentPayload<ExtArgs>[]
      Report: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      departmentId: string
      collegeId: number
      adminId: number
      hodId: number | null
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    college<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hod<T extends Department$hodArgs<ExtArgs> = {}>(args?: Subset<T, Department$hodArgs<ExtArgs>>): Prisma__HODClient<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Lab<T extends Department$LabArgs<ExtArgs> = {}>(args?: Subset<T, Department$LabArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    components<T extends Department$componentsArgs<ExtArgs> = {}>(args?: Subset<T, Department$componentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Report<T extends Department$ReportArgs<ExtArgs> = {}>(args?: Subset<T, Department$ReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'Int'>
    readonly name: FieldRef<"Department", 'String'>
    readonly departmentId: FieldRef<"Department", 'String'>
    readonly collegeId: FieldRef<"Department", 'Int'>
    readonly adminId: FieldRef<"Department", 'Int'>
    readonly hodId: FieldRef<"Department", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.hod
   */
  export type Department$hodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HOD
     */
    select?: HODSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HOD
     */
    omit?: HODOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HODInclude<ExtArgs> | null
    where?: HODWhereInput
  }

  /**
   * Department.Lab
   */
  export type Department$LabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lab
     */
    select?: LabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lab
     */
    omit?: LabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabInclude<ExtArgs> | null
    where?: LabWhereInput
    orderBy?: LabOrderByWithRelationInput | LabOrderByWithRelationInput[]
    cursor?: LabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LabScalarFieldEnum | LabScalarFieldEnum[]
  }

  /**
   * Department.components
   */
  export type Department$componentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Component
     */
    select?: ComponentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Component
     */
    omit?: ComponentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComponentInclude<ExtArgs> | null
    where?: ComponentWhereInput
    orderBy?: ComponentOrderByWithRelationInput | ComponentOrderByWithRelationInput[]
    cursor?: ComponentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComponentScalarFieldEnum | ComponentScalarFieldEnum[]
  }

  /**
   * Department.Report
   */
  export type Department$ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    id: number | null
    componentId: number | null
    hodId: number | null
    departmentId: number | null
  }

  export type ReportSumAggregateOutputType = {
    id: number | null
    componentId: number | null
    hodId: number | null
    departmentId: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: number | null
    componentId: number | null
    hodId: number | null
    status: $Enums.Status | null
    message: string | null
    createdAt: Date | null
    departmentId: number | null
  }

  export type ReportMaxAggregateOutputType = {
    id: number | null
    componentId: number | null
    hodId: number | null
    status: $Enums.Status | null
    message: string | null
    createdAt: Date | null
    departmentId: number | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    componentId: number
    hodId: number
    status: number
    message: number
    createdAt: number
    departmentId: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    id?: true
    componentId?: true
    hodId?: true
    departmentId?: true
  }

  export type ReportSumAggregateInputType = {
    id?: true
    componentId?: true
    hodId?: true
    departmentId?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    componentId?: true
    hodId?: true
    status?: true
    message?: true
    createdAt?: true
    departmentId?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    componentId?: true
    hodId?: true
    status?: true
    message?: true
    createdAt?: true
    departmentId?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    componentId?: true
    hodId?: true
    status?: true
    message?: true
    createdAt?: true
    departmentId?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: number
    componentId: number
    hodId: number
    status: $Enums.Status
    message: string
    createdAt: Date
    departmentId: number
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    componentId?: boolean
    hodId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    departmentId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    component?: boolean | ComponentDefaultArgs<ExtArgs>
    hod?: boolean | HODDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    componentId?: boolean
    hodId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    departmentId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    component?: boolean | ComponentDefaultArgs<ExtArgs>
    hod?: boolean | HODDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    componentId?: boolean
    hodId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    departmentId?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    component?: boolean | ComponentDefaultArgs<ExtArgs>
    hod?: boolean | HODDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    componentId?: boolean
    hodId?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    departmentId?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "componentId" | "hodId" | "status" | "message" | "createdAt" | "departmentId", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    component?: boolean | ComponentDefaultArgs<ExtArgs>
    hod?: boolean | HODDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    component?: boolean | ComponentDefaultArgs<ExtArgs>
    hod?: boolean | HODDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    component?: boolean | ComponentDefaultArgs<ExtArgs>
    hod?: boolean | HODDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      component: Prisma.$ComponentPayload<ExtArgs>
      hod: Prisma.$HODPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      componentId: number
      hodId: number
      status: $Enums.Status
      message: string
      createdAt: Date
      departmentId: number
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    component<T extends ComponentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ComponentDefaultArgs<ExtArgs>>): Prisma__ComponentClient<$Result.GetResult<Prisma.$ComponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hod<T extends HODDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HODDefaultArgs<ExtArgs>>): Prisma__HODClient<$Result.GetResult<Prisma.$HODPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'Int'>
    readonly componentId: FieldRef<"Report", 'Int'>
    readonly hodId: FieldRef<"Report", 'Int'>
    readonly status: FieldRef<"Report", 'Status'>
    readonly message: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly departmentId: FieldRef<"Report", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CollegeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    collegeId: 'collegeId',
    adminId: 'adminId'
  };

  export type CollegeScalarFieldEnum = (typeof CollegeScalarFieldEnum)[keyof typeof CollegeScalarFieldEnum]


  export const WarehouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    collegeId: 'collegeId',
    adminId: 'adminId',
    warehouseId: 'warehouseId'
  };

  export type WarehouseScalarFieldEnum = (typeof WarehouseScalarFieldEnum)[keyof typeof WarehouseScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    collegeId: 'collegeId',
    adminId: 'adminId',
    role: 'role',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const ComponentRequestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brand: 'brand',
    modelNumber: 'modelNumber',
    serialNumber: 'serialNumber',
    createdAt: 'createdAt',
    staffId: 'staffId',
    type: 'type',
    status: 'status',
    createdByStaffId: 'createdByStaffId'
  };

  export type ComponentRequestScalarFieldEnum = (typeof ComponentRequestScalarFieldEnum)[keyof typeof ComponentRequestScalarFieldEnum]


  export const HODScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    collegeId: 'collegeId',
    adminId: 'adminId',
    role: 'role'
  };

  export type HODScalarFieldEnum = (typeof HODScalarFieldEnum)[keyof typeof HODScalarFieldEnum]


  export const LabScalarFieldEnum: {
    id: 'id',
    name: 'name',
    departmentId: 'departmentId',
    adminId: 'adminId'
  };

  export type LabScalarFieldEnum = (typeof LabScalarFieldEnum)[keyof typeof LabScalarFieldEnum]


  export const ComponentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brand: 'brand',
    modelNumber: 'modelNumber',
    serialNumber: 'serialNumber',
    collegeId: 'collegeId',
    warehouseId: 'warehouseId',
    adminId: 'adminId',
    labId: 'labId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    type: 'type'
  };

  export type ComponentScalarFieldEnum = (typeof ComponentScalarFieldEnum)[keyof typeof ComponentScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    departmentId: 'departmentId',
    collegeId: 'collegeId',
    adminId: 'adminId',
    hodId: 'hodId'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    componentId: 'componentId',
    hodId: 'hodId',
    status: 'status',
    message: 'message',
    createdAt: 'createdAt',
    departmentId: 'departmentId'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'ComponentType'
   */
  export type EnumComponentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComponentType'>
    


  /**
   * Reference to a field of type 'ComponentType[]'
   */
  export type ListEnumComponentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComponentType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    phone?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    resetToken?: StringNullableFilter<"Admin"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Admin"> | Date | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    colleges?: CollegeListRelationFilter
    staffs?: StaffListRelationFilter
    warehouses?: WarehouseListRelationFilter
    component?: ComponentListRelationFilter
    HOD?: HODListRelationFilter
    Department?: DepartmentListRelationFilter
    Lab?: LabListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    colleges?: CollegeOrderByRelationAggregateInput
    staffs?: StaffOrderByRelationAggregateInput
    warehouses?: WarehouseOrderByRelationAggregateInput
    component?: ComponentOrderByRelationAggregateInput
    HOD?: HODOrderByRelationAggregateInput
    Department?: DepartmentOrderByRelationAggregateInput
    Lab?: LabOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    phone?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    resetToken?: StringNullableFilter<"Admin"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Admin"> | Date | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    colleges?: CollegeListRelationFilter
    staffs?: StaffListRelationFilter
    warehouses?: WarehouseListRelationFilter
    component?: ComponentListRelationFilter
    HOD?: HODListRelationFilter
    Department?: DepartmentListRelationFilter
    Lab?: LabListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    phone?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumRoleWithAggregatesFilter<"Admin"> | $Enums.Role
    resetToken?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type CollegeWhereInput = {
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    id?: IntFilter<"College"> | number
    name?: StringFilter<"College"> | string
    address?: StringFilter<"College"> | string
    collegeId?: StringFilter<"College"> | string
    adminId?: IntFilter<"College"> | number
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    staffs?: StaffListRelationFilter
    warehouses?: WarehouseListRelationFilter
    component?: ComponentListRelationFilter
    hod?: HODListRelationFilter
    Department?: DepartmentListRelationFilter
  }

  export type CollegeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    admin?: AdminOrderByWithRelationInput
    staffs?: StaffOrderByRelationAggregateInput
    warehouses?: WarehouseOrderByRelationAggregateInput
    component?: ComponentOrderByRelationAggregateInput
    hod?: HODOrderByRelationAggregateInput
    Department?: DepartmentOrderByRelationAggregateInput
  }

  export type CollegeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    collegeId?: string
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    name?: StringFilter<"College"> | string
    address?: StringFilter<"College"> | string
    adminId?: IntFilter<"College"> | number
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    staffs?: StaffListRelationFilter
    warehouses?: WarehouseListRelationFilter
    component?: ComponentListRelationFilter
    hod?: HODListRelationFilter
    Department?: DepartmentListRelationFilter
  }, "id" | "collegeId">

  export type CollegeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    _count?: CollegeCountOrderByAggregateInput
    _avg?: CollegeAvgOrderByAggregateInput
    _max?: CollegeMaxOrderByAggregateInput
    _min?: CollegeMinOrderByAggregateInput
    _sum?: CollegeSumOrderByAggregateInput
  }

  export type CollegeScalarWhereWithAggregatesInput = {
    AND?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    OR?: CollegeScalarWhereWithAggregatesInput[]
    NOT?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"College"> | number
    name?: StringWithAggregatesFilter<"College"> | string
    address?: StringWithAggregatesFilter<"College"> | string
    collegeId?: StringWithAggregatesFilter<"College"> | string
    adminId?: IntWithAggregatesFilter<"College"> | number
  }

  export type WarehouseWhereInput = {
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    id?: IntFilter<"Warehouse"> | number
    name?: StringFilter<"Warehouse"> | string
    collegeId?: IntFilter<"Warehouse"> | number
    adminId?: IntFilter<"Warehouse"> | number
    warehouseId?: StringFilter<"Warehouse"> | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    component?: ComponentListRelationFilter
  }

  export type WarehouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    warehouseId?: SortOrder
    admin?: AdminOrderByWithRelationInput
    college?: CollegeOrderByWithRelationInput
    component?: ComponentOrderByRelationAggregateInput
  }

  export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    warehouseId?: string
    AND?: WarehouseWhereInput | WarehouseWhereInput[]
    OR?: WarehouseWhereInput[]
    NOT?: WarehouseWhereInput | WarehouseWhereInput[]
    name?: StringFilter<"Warehouse"> | string
    collegeId?: IntFilter<"Warehouse"> | number
    adminId?: IntFilter<"Warehouse"> | number
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    component?: ComponentListRelationFilter
  }, "id" | "warehouseId">

  export type WarehouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    warehouseId?: SortOrder
    _count?: WarehouseCountOrderByAggregateInput
    _avg?: WarehouseAvgOrderByAggregateInput
    _max?: WarehouseMaxOrderByAggregateInput
    _min?: WarehouseMinOrderByAggregateInput
    _sum?: WarehouseSumOrderByAggregateInput
  }

  export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    OR?: WarehouseScalarWhereWithAggregatesInput[]
    NOT?: WarehouseScalarWhereWithAggregatesInput | WarehouseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Warehouse"> | number
    name?: StringWithAggregatesFilter<"Warehouse"> | string
    collegeId?: IntWithAggregatesFilter<"Warehouse"> | number
    adminId?: IntWithAggregatesFilter<"Warehouse"> | number
    warehouseId?: StringWithAggregatesFilter<"Warehouse"> | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: IntFilter<"Staff"> | number
    name?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    password?: StringFilter<"Staff"> | string
    phone?: StringFilter<"Staff"> | string
    collegeId?: IntFilter<"Staff"> | number
    adminId?: IntFilter<"Staff"> | number
    role?: EnumRoleFilter<"Staff"> | $Enums.Role
    resetToken?: StringNullableFilter<"Staff"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Staff"> | Date | string | null
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    componentRequest?: ComponentRequestListRelationFilter
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    admin?: AdminOrderByWithRelationInput
    college?: CollegeOrderByWithRelationInput
    componentRequest?: ComponentRequestOrderByRelationAggregateInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    name?: StringFilter<"Staff"> | string
    password?: StringFilter<"Staff"> | string
    phone?: StringFilter<"Staff"> | string
    collegeId?: IntFilter<"Staff"> | number
    adminId?: IntFilter<"Staff"> | number
    role?: EnumRoleFilter<"Staff"> | $Enums.Role
    resetToken?: StringNullableFilter<"Staff"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Staff"> | Date | string | null
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    componentRequest?: ComponentRequestListRelationFilter
  }, "id" | "email">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    _count?: StaffCountOrderByAggregateInput
    _avg?: StaffAvgOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
    _sum?: StaffSumOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Staff"> | number
    name?: StringWithAggregatesFilter<"Staff"> | string
    email?: StringWithAggregatesFilter<"Staff"> | string
    password?: StringWithAggregatesFilter<"Staff"> | string
    phone?: StringWithAggregatesFilter<"Staff"> | string
    collegeId?: IntWithAggregatesFilter<"Staff"> | number
    adminId?: IntWithAggregatesFilter<"Staff"> | number
    role?: EnumRoleWithAggregatesFilter<"Staff"> | $Enums.Role
    resetToken?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"Staff"> | Date | string | null
  }

  export type ComponentRequestWhereInput = {
    AND?: ComponentRequestWhereInput | ComponentRequestWhereInput[]
    OR?: ComponentRequestWhereInput[]
    NOT?: ComponentRequestWhereInput | ComponentRequestWhereInput[]
    id?: IntFilter<"ComponentRequest"> | number
    name?: StringFilter<"ComponentRequest"> | string
    brand?: StringFilter<"ComponentRequest"> | string
    modelNumber?: StringFilter<"ComponentRequest"> | string
    serialNumber?: StringFilter<"ComponentRequest"> | string
    createdAt?: DateTimeFilter<"ComponentRequest"> | Date | string
    staffId?: IntFilter<"ComponentRequest"> | number
    type?: StringFilter<"ComponentRequest"> | string
    status?: StringFilter<"ComponentRequest"> | string
    createdByStaffId?: IntNullableFilter<"ComponentRequest"> | number | null
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }

  export type ComponentRequestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    modelNumber?: SortOrder
    serialNumber?: SortOrder
    createdAt?: SortOrder
    staffId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdByStaffId?: SortOrderInput | SortOrder
    staff?: StaffOrderByWithRelationInput
  }

  export type ComponentRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ComponentRequestWhereInput | ComponentRequestWhereInput[]
    OR?: ComponentRequestWhereInput[]
    NOT?: ComponentRequestWhereInput | ComponentRequestWhereInput[]
    name?: StringFilter<"ComponentRequest"> | string
    brand?: StringFilter<"ComponentRequest"> | string
    modelNumber?: StringFilter<"ComponentRequest"> | string
    serialNumber?: StringFilter<"ComponentRequest"> | string
    createdAt?: DateTimeFilter<"ComponentRequest"> | Date | string
    staffId?: IntFilter<"ComponentRequest"> | number
    type?: StringFilter<"ComponentRequest"> | string
    status?: StringFilter<"ComponentRequest"> | string
    createdByStaffId?: IntNullableFilter<"ComponentRequest"> | number | null
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
  }, "id">

  export type ComponentRequestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    modelNumber?: SortOrder
    serialNumber?: SortOrder
    createdAt?: SortOrder
    staffId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdByStaffId?: SortOrderInput | SortOrder
    _count?: ComponentRequestCountOrderByAggregateInput
    _avg?: ComponentRequestAvgOrderByAggregateInput
    _max?: ComponentRequestMaxOrderByAggregateInput
    _min?: ComponentRequestMinOrderByAggregateInput
    _sum?: ComponentRequestSumOrderByAggregateInput
  }

  export type ComponentRequestScalarWhereWithAggregatesInput = {
    AND?: ComponentRequestScalarWhereWithAggregatesInput | ComponentRequestScalarWhereWithAggregatesInput[]
    OR?: ComponentRequestScalarWhereWithAggregatesInput[]
    NOT?: ComponentRequestScalarWhereWithAggregatesInput | ComponentRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ComponentRequest"> | number
    name?: StringWithAggregatesFilter<"ComponentRequest"> | string
    brand?: StringWithAggregatesFilter<"ComponentRequest"> | string
    modelNumber?: StringWithAggregatesFilter<"ComponentRequest"> | string
    serialNumber?: StringWithAggregatesFilter<"ComponentRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ComponentRequest"> | Date | string
    staffId?: IntWithAggregatesFilter<"ComponentRequest"> | number
    type?: StringWithAggregatesFilter<"ComponentRequest"> | string
    status?: StringWithAggregatesFilter<"ComponentRequest"> | string
    createdByStaffId?: IntNullableWithAggregatesFilter<"ComponentRequest"> | number | null
  }

  export type HODWhereInput = {
    AND?: HODWhereInput | HODWhereInput[]
    OR?: HODWhereInput[]
    NOT?: HODWhereInput | HODWhereInput[]
    id?: IntFilter<"HOD"> | number
    name?: StringFilter<"HOD"> | string
    email?: StringFilter<"HOD"> | string
    phone?: StringFilter<"HOD"> | string
    password?: StringFilter<"HOD"> | string
    collegeId?: IntFilter<"HOD"> | number
    adminId?: IntFilter<"HOD"> | number
    role?: EnumRoleFilter<"HOD"> | $Enums.Role
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    departments?: DepartmentListRelationFilter
    Report?: ReportListRelationFilter
  }

  export type HODOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
    admin?: AdminOrderByWithRelationInput
    college?: CollegeOrderByWithRelationInput
    departments?: DepartmentOrderByRelationAggregateInput
    Report?: ReportOrderByRelationAggregateInput
  }

  export type HODWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: HODWhereInput | HODWhereInput[]
    OR?: HODWhereInput[]
    NOT?: HODWhereInput | HODWhereInput[]
    name?: StringFilter<"HOD"> | string
    phone?: StringFilter<"HOD"> | string
    password?: StringFilter<"HOD"> | string
    collegeId?: IntFilter<"HOD"> | number
    adminId?: IntFilter<"HOD"> | number
    role?: EnumRoleFilter<"HOD"> | $Enums.Role
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    departments?: DepartmentListRelationFilter
    Report?: ReportListRelationFilter
  }, "id" | "email">

  export type HODOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
    _count?: HODCountOrderByAggregateInput
    _avg?: HODAvgOrderByAggregateInput
    _max?: HODMaxOrderByAggregateInput
    _min?: HODMinOrderByAggregateInput
    _sum?: HODSumOrderByAggregateInput
  }

  export type HODScalarWhereWithAggregatesInput = {
    AND?: HODScalarWhereWithAggregatesInput | HODScalarWhereWithAggregatesInput[]
    OR?: HODScalarWhereWithAggregatesInput[]
    NOT?: HODScalarWhereWithAggregatesInput | HODScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HOD"> | number
    name?: StringWithAggregatesFilter<"HOD"> | string
    email?: StringWithAggregatesFilter<"HOD"> | string
    phone?: StringWithAggregatesFilter<"HOD"> | string
    password?: StringWithAggregatesFilter<"HOD"> | string
    collegeId?: IntWithAggregatesFilter<"HOD"> | number
    adminId?: IntWithAggregatesFilter<"HOD"> | number
    role?: EnumRoleWithAggregatesFilter<"HOD"> | $Enums.Role
  }

  export type LabWhereInput = {
    AND?: LabWhereInput | LabWhereInput[]
    OR?: LabWhereInput[]
    NOT?: LabWhereInput | LabWhereInput[]
    id?: IntFilter<"Lab"> | number
    name?: StringFilter<"Lab"> | string
    departmentId?: IntFilter<"Lab"> | number
    adminId?: IntNullableFilter<"Lab"> | number | null
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    components?: ComponentListRelationFilter
  }

  export type LabOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    adminId?: SortOrderInput | SortOrder
    department?: DepartmentOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
    components?: ComponentOrderByRelationAggregateInput
  }

  export type LabWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LabWhereInput | LabWhereInput[]
    OR?: LabWhereInput[]
    NOT?: LabWhereInput | LabWhereInput[]
    name?: StringFilter<"Lab"> | string
    departmentId?: IntFilter<"Lab"> | number
    adminId?: IntNullableFilter<"Lab"> | number | null
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    components?: ComponentListRelationFilter
  }, "id">

  export type LabOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    adminId?: SortOrderInput | SortOrder
    _count?: LabCountOrderByAggregateInput
    _avg?: LabAvgOrderByAggregateInput
    _max?: LabMaxOrderByAggregateInput
    _min?: LabMinOrderByAggregateInput
    _sum?: LabSumOrderByAggregateInput
  }

  export type LabScalarWhereWithAggregatesInput = {
    AND?: LabScalarWhereWithAggregatesInput | LabScalarWhereWithAggregatesInput[]
    OR?: LabScalarWhereWithAggregatesInput[]
    NOT?: LabScalarWhereWithAggregatesInput | LabScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lab"> | number
    name?: StringWithAggregatesFilter<"Lab"> | string
    departmentId?: IntWithAggregatesFilter<"Lab"> | number
    adminId?: IntNullableWithAggregatesFilter<"Lab"> | number | null
  }

  export type ComponentWhereInput = {
    AND?: ComponentWhereInput | ComponentWhereInput[]
    OR?: ComponentWhereInput[]
    NOT?: ComponentWhereInput | ComponentWhereInput[]
    id?: IntFilter<"Component"> | number
    name?: StringFilter<"Component"> | string
    brand?: StringFilter<"Component"> | string
    modelNumber?: StringFilter<"Component"> | string
    serialNumber?: StringFilter<"Component"> | string
    collegeId?: IntFilter<"Component"> | number
    warehouseId?: IntFilter<"Component"> | number
    adminId?: IntFilter<"Component"> | number
    labId?: IntFilter<"Component"> | number
    createdAt?: DateTimeFilter<"Component"> | Date | string
    updatedAt?: DateTimeFilter<"Component"> | Date | string
    status?: EnumStatusFilter<"Component"> | $Enums.Status
    type?: EnumComponentTypeFilter<"Component"> | $Enums.ComponentType
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    lab?: XOR<LabScalarRelationFilter, LabWhereInput>
    Report?: ReportListRelationFilter
    Department?: DepartmentListRelationFilter
  }

  export type ComponentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    modelNumber?: SortOrder
    serialNumber?: SortOrder
    collegeId?: SortOrder
    warehouseId?: SortOrder
    adminId?: SortOrder
    labId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
    admin?: AdminOrderByWithRelationInput
    college?: CollegeOrderByWithRelationInput
    warehouse?: WarehouseOrderByWithRelationInput
    lab?: LabOrderByWithRelationInput
    Report?: ReportOrderByRelationAggregateInput
    Department?: DepartmentOrderByRelationAggregateInput
  }

  export type ComponentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    modelNumber?: string
    serialNumber?: string
    AND?: ComponentWhereInput | ComponentWhereInput[]
    OR?: ComponentWhereInput[]
    NOT?: ComponentWhereInput | ComponentWhereInput[]
    name?: StringFilter<"Component"> | string
    brand?: StringFilter<"Component"> | string
    collegeId?: IntFilter<"Component"> | number
    warehouseId?: IntFilter<"Component"> | number
    adminId?: IntFilter<"Component"> | number
    labId?: IntFilter<"Component"> | number
    createdAt?: DateTimeFilter<"Component"> | Date | string
    updatedAt?: DateTimeFilter<"Component"> | Date | string
    status?: EnumStatusFilter<"Component"> | $Enums.Status
    type?: EnumComponentTypeFilter<"Component"> | $Enums.ComponentType
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    warehouse?: XOR<WarehouseScalarRelationFilter, WarehouseWhereInput>
    lab?: XOR<LabScalarRelationFilter, LabWhereInput>
    Report?: ReportListRelationFilter
    Department?: DepartmentListRelationFilter
  }, "id" | "modelNumber" | "serialNumber">

  export type ComponentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    modelNumber?: SortOrder
    serialNumber?: SortOrder
    collegeId?: SortOrder
    warehouseId?: SortOrder
    adminId?: SortOrder
    labId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
    _count?: ComponentCountOrderByAggregateInput
    _avg?: ComponentAvgOrderByAggregateInput
    _max?: ComponentMaxOrderByAggregateInput
    _min?: ComponentMinOrderByAggregateInput
    _sum?: ComponentSumOrderByAggregateInput
  }

  export type ComponentScalarWhereWithAggregatesInput = {
    AND?: ComponentScalarWhereWithAggregatesInput | ComponentScalarWhereWithAggregatesInput[]
    OR?: ComponentScalarWhereWithAggregatesInput[]
    NOT?: ComponentScalarWhereWithAggregatesInput | ComponentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Component"> | number
    name?: StringWithAggregatesFilter<"Component"> | string
    brand?: StringWithAggregatesFilter<"Component"> | string
    modelNumber?: StringWithAggregatesFilter<"Component"> | string
    serialNumber?: StringWithAggregatesFilter<"Component"> | string
    collegeId?: IntWithAggregatesFilter<"Component"> | number
    warehouseId?: IntWithAggregatesFilter<"Component"> | number
    adminId?: IntWithAggregatesFilter<"Component"> | number
    labId?: IntWithAggregatesFilter<"Component"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Component"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Component"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Component"> | $Enums.Status
    type?: EnumComponentTypeWithAggregatesFilter<"Component"> | $Enums.ComponentType
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: IntFilter<"Department"> | number
    name?: StringFilter<"Department"> | string
    departmentId?: StringFilter<"Department"> | string
    collegeId?: IntFilter<"Department"> | number
    adminId?: IntFilter<"Department"> | number
    hodId?: IntNullableFilter<"Department"> | number | null
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    hod?: XOR<HODNullableScalarRelationFilter, HODWhereInput> | null
    Lab?: LabListRelationFilter
    components?: ComponentListRelationFilter
    Report?: ReportListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    hodId?: SortOrderInput | SortOrder
    admin?: AdminOrderByWithRelationInput
    college?: CollegeOrderByWithRelationInput
    hod?: HODOrderByWithRelationInput
    Lab?: LabOrderByRelationAggregateInput
    components?: ComponentOrderByRelationAggregateInput
    Report?: ReportOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    departmentId?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    collegeId?: IntFilter<"Department"> | number
    adminId?: IntFilter<"Department"> | number
    hodId?: IntNullableFilter<"Department"> | number | null
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    college?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    hod?: XOR<HODNullableScalarRelationFilter, HODWhereInput> | null
    Lab?: LabListRelationFilter
    components?: ComponentListRelationFilter
    Report?: ReportListRelationFilter
  }, "id" | "departmentId">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    hodId?: SortOrderInput | SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Department"> | number
    name?: StringWithAggregatesFilter<"Department"> | string
    departmentId?: StringWithAggregatesFilter<"Department"> | string
    collegeId?: IntWithAggregatesFilter<"Department"> | number
    adminId?: IntWithAggregatesFilter<"Department"> | number
    hodId?: IntNullableWithAggregatesFilter<"Department"> | number | null
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: IntFilter<"Report"> | number
    componentId?: IntFilter<"Report"> | number
    hodId?: IntFilter<"Report"> | number
    status?: EnumStatusFilter<"Report"> | $Enums.Status
    message?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    departmentId?: IntFilter<"Report"> | number
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    component?: XOR<ComponentScalarRelationFilter, ComponentWhereInput>
    hod?: XOR<HODScalarRelationFilter, HODWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    componentId?: SortOrder
    hodId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    departmentId?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    component?: ComponentOrderByWithRelationInput
    hod?: HODOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    componentId?: IntFilter<"Report"> | number
    hodId?: IntFilter<"Report"> | number
    status?: EnumStatusFilter<"Report"> | $Enums.Status
    message?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    departmentId?: IntFilter<"Report"> | number
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    component?: XOR<ComponentScalarRelationFilter, ComponentWhereInput>
    hod?: XOR<HODScalarRelationFilter, HODWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    componentId?: SortOrder
    hodId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    departmentId?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Report"> | number
    componentId?: IntWithAggregatesFilter<"Report"> | number
    hodId?: IntWithAggregatesFilter<"Report"> | number
    status?: EnumStatusWithAggregatesFilter<"Report"> | $Enums.Status
    message?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    departmentId?: IntWithAggregatesFilter<"Report"> | number
  }

  export type AdminCreateInput = {
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeCreateNestedManyWithoutAdminInput
    staffs?: StaffCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseCreateNestedManyWithoutAdminInput
    component?: ComponentCreateNestedManyWithoutAdminInput
    HOD?: HODCreateNestedManyWithoutAdminInput
    Department?: DepartmentCreateNestedManyWithoutAdminInput
    Lab?: LabCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeUncheckedCreateNestedManyWithoutAdminInput
    staffs?: StaffUncheckedCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutAdminInput
    component?: ComponentUncheckedCreateNestedManyWithoutAdminInput
    HOD?: HODUncheckedCreateNestedManyWithoutAdminInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutAdminInput
    Lab?: LabUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUpdateManyWithoutAdminNestedInput
    staffs?: StaffUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUpdateManyWithoutAdminNestedInput
    component?: ComponentUpdateManyWithoutAdminNestedInput
    HOD?: HODUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUpdateManyWithoutAdminNestedInput
    Lab?: LabUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUncheckedUpdateManyWithoutAdminNestedInput
    staffs?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutAdminNestedInput
    component?: ComponentUncheckedUpdateManyWithoutAdminNestedInput
    HOD?: HODUncheckedUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutAdminNestedInput
    Lab?: LabUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollegeCreateInput = {
    name: string
    address: string
    collegeId: string
    admin: AdminCreateNestedOneWithoutCollegesInput
    staffs?: StaffCreateNestedManyWithoutCollegeInput
    warehouses?: WarehouseCreateNestedManyWithoutCollegeInput
    component?: ComponentCreateNestedManyWithoutCollegeInput
    hod?: HODCreateNestedManyWithoutCollegeInput
    Department?: DepartmentCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    collegeId: string
    adminId: number
    staffs?: StaffUncheckedCreateNestedManyWithoutCollegeInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutCollegeInput
    component?: ComponentUncheckedCreateNestedManyWithoutCollegeInput
    hod?: HODUncheckedCreateNestedManyWithoutCollegeInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutCollegesNestedInput
    staffs?: StaffUpdateManyWithoutCollegeNestedInput
    warehouses?: WarehouseUpdateManyWithoutCollegeNestedInput
    component?: ComponentUpdateManyWithoutCollegeNestedInput
    hod?: HODUpdateManyWithoutCollegeNestedInput
    Department?: DepartmentUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    staffs?: StaffUncheckedUpdateManyWithoutCollegeNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutCollegeNestedInput
    component?: ComponentUncheckedUpdateManyWithoutCollegeNestedInput
    hod?: HODUncheckedUpdateManyWithoutCollegeNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeCreateManyInput = {
    id?: number
    name: string
    address: string
    collegeId: string
    adminId: number
  }

  export type CollegeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type WarehouseCreateInput = {
    name: string
    warehouseId: string
    admin: AdminCreateNestedOneWithoutWarehousesInput
    college: CollegeCreateNestedOneWithoutWarehousesInput
    component?: ComponentCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateInput = {
    id?: number
    name: string
    collegeId: number
    adminId: number
    warehouseId: string
    component?: ComponentUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutWarehousesNestedInput
    college?: CollegeUpdateOneRequiredWithoutWarehousesNestedInput
    component?: ComponentUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    warehouseId?: StringFieldUpdateOperationsInput | string
    component?: ComponentUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseCreateManyInput = {
    id?: number
    name: string
    collegeId: number
    adminId: number
    warehouseId: string
  }

  export type WarehouseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
  }

  export type WarehouseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    warehouseId?: StringFieldUpdateOperationsInput | string
  }

  export type StaffCreateInput = {
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    admin: AdminCreateNestedOneWithoutStaffsInput
    college: CollegeCreateNestedOneWithoutStaffsInput
    componentRequest?: ComponentRequestCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    collegeId: number
    adminId: number
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    componentRequest?: ComponentRequestUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneRequiredWithoutStaffsNestedInput
    college?: CollegeUpdateOneRequiredWithoutStaffsNestedInput
    componentRequest?: ComponentRequestUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    componentRequest?: ComponentRequestUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    collegeId: number
    adminId: number
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type StaffUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ComponentRequestCreateInput = {
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt?: Date | string
    type: string
    status: string
    createdByStaffId?: number | null
    staff: StaffCreateNestedOneWithoutComponentRequestInput
  }

  export type ComponentRequestUncheckedCreateInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt?: Date | string
    staffId: number
    type: string
    status: string
    createdByStaffId?: number | null
  }

  export type ComponentRequestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
    staff?: StaffUpdateOneRequiredWithoutComponentRequestNestedInput
  }

  export type ComponentRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ComponentRequestCreateManyInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt?: Date | string
    staffId: number
    type: string
    status: string
    createdByStaffId?: number | null
  }

  export type ComponentRequestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ComponentRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HODCreateInput = {
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    admin: AdminCreateNestedOneWithoutHODInput
    college: CollegeCreateNestedOneWithoutHodInput
    departments?: DepartmentCreateNestedManyWithoutHodInput
    Report?: ReportCreateNestedManyWithoutHodInput
  }

  export type HODUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    collegeId: number
    adminId: number
    role?: $Enums.Role
    departments?: DepartmentUncheckedCreateNestedManyWithoutHodInput
    Report?: ReportUncheckedCreateNestedManyWithoutHodInput
  }

  export type HODUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    admin?: AdminUpdateOneRequiredWithoutHODNestedInput
    college?: CollegeUpdateOneRequiredWithoutHodNestedInput
    departments?: DepartmentUpdateManyWithoutHodNestedInput
    Report?: ReportUpdateManyWithoutHodNestedInput
  }

  export type HODUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departments?: DepartmentUncheckedUpdateManyWithoutHodNestedInput
    Report?: ReportUncheckedUpdateManyWithoutHodNestedInput
  }

  export type HODCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    collegeId: number
    adminId: number
    role?: $Enums.Role
  }

  export type HODUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type HODUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type LabCreateInput = {
    name: string
    department: DepartmentCreateNestedOneWithoutLabInput
    admin?: AdminCreateNestedOneWithoutLabInput
    components?: ComponentCreateNestedManyWithoutLabInput
  }

  export type LabUncheckedCreateInput = {
    id?: number
    name: string
    departmentId: number
    adminId?: number | null
    components?: ComponentUncheckedCreateNestedManyWithoutLabInput
  }

  export type LabUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutLabNestedInput
    admin?: AdminUpdateOneWithoutLabNestedInput
    components?: ComponentUpdateManyWithoutLabNestedInput
  }

  export type LabUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    components?: ComponentUncheckedUpdateManyWithoutLabNestedInput
  }

  export type LabCreateManyInput = {
    id?: number
    name: string
    departmentId: number
    adminId?: number | null
  }

  export type LabUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LabUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ComponentCreateInput = {
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    admin: AdminCreateNestedOneWithoutComponentInput
    college: CollegeCreateNestedOneWithoutComponentInput
    warehouse: WarehouseCreateNestedOneWithoutComponentInput
    lab: LabCreateNestedOneWithoutComponentsInput
    Report?: ReportCreateNestedManyWithoutComponentInput
    Department?: DepartmentCreateNestedManyWithoutComponentsInput
  }

  export type ComponentUncheckedCreateInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    collegeId: number
    warehouseId: number
    adminId: number
    labId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    Report?: ReportUncheckedCreateNestedManyWithoutComponentInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutComponentsInput
  }

  export type ComponentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    admin?: AdminUpdateOneRequiredWithoutComponentNestedInput
    college?: CollegeUpdateOneRequiredWithoutComponentNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutComponentNestedInput
    lab?: LabUpdateOneRequiredWithoutComponentsNestedInput
    Report?: ReportUpdateManyWithoutComponentNestedInput
    Department?: DepartmentUpdateManyWithoutComponentsNestedInput
  }

  export type ComponentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    labId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    Report?: ReportUncheckedUpdateManyWithoutComponentNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutComponentsNestedInput
  }

  export type ComponentCreateManyInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    collegeId: number
    warehouseId: number
    adminId: number
    labId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
  }

  export type ComponentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
  }

  export type ComponentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    labId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
  }

  export type DepartmentCreateInput = {
    name: string
    departmentId: string
    admin: AdminCreateNestedOneWithoutDepartmentInput
    college: CollegeCreateNestedOneWithoutDepartmentInput
    hod?: HODCreateNestedOneWithoutDepartmentsInput
    Lab?: LabCreateNestedManyWithoutDepartmentInput
    components?: ComponentCreateNestedManyWithoutDepartmentInput
    Report?: ReportCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: number
    name: string
    departmentId: string
    collegeId: number
    adminId: number
    hodId?: number | null
    Lab?: LabUncheckedCreateNestedManyWithoutDepartmentInput
    components?: ComponentUncheckedCreateNestedManyWithoutDepartmentInput
    Report?: ReportUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutDepartmentNestedInput
    college?: CollegeUpdateOneRequiredWithoutDepartmentNestedInput
    hod?: HODUpdateOneWithoutDepartmentsNestedInput
    Lab?: LabUpdateManyWithoutDepartmentNestedInput
    components?: ComponentUpdateManyWithoutDepartmentNestedInput
    Report?: ReportUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    hodId?: NullableIntFieldUpdateOperationsInput | number | null
    Lab?: LabUncheckedUpdateManyWithoutDepartmentNestedInput
    components?: ComponentUncheckedUpdateManyWithoutDepartmentNestedInput
    Report?: ReportUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: number
    name: string
    departmentId: string
    collegeId: number
    adminId: number
    hodId?: number | null
  }

  export type DepartmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    hodId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReportCreateInput = {
    status: $Enums.Status
    message: string
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutReportInput
    component: ComponentCreateNestedOneWithoutReportInput
    hod: HODCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id?: number
    componentId: number
    hodId: number
    status: $Enums.Status
    message: string
    createdAt?: Date | string
    departmentId: number
  }

  export type ReportUpdateInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutReportNestedInput
    component?: ComponentUpdateOneRequiredWithoutReportNestedInput
    hod?: HODUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    hodId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: IntFieldUpdateOperationsInput | number
  }

  export type ReportCreateManyInput = {
    id?: number
    componentId: number
    hodId: number
    status: $Enums.Status
    message: string
    createdAt?: Date | string
    departmentId: number
  }

  export type ReportUpdateManyMutationInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    hodId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CollegeListRelationFilter = {
    every?: CollegeWhereInput
    some?: CollegeWhereInput
    none?: CollegeWhereInput
  }

  export type StaffListRelationFilter = {
    every?: StaffWhereInput
    some?: StaffWhereInput
    none?: StaffWhereInput
  }

  export type WarehouseListRelationFilter = {
    every?: WarehouseWhereInput
    some?: WarehouseWhereInput
    none?: WarehouseWhereInput
  }

  export type ComponentListRelationFilter = {
    every?: ComponentWhereInput
    some?: ComponentWhereInput
    none?: ComponentWhereInput
  }

  export type HODListRelationFilter = {
    every?: HODWhereInput
    some?: HODWhereInput
    none?: HODWhereInput
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type LabListRelationFilter = {
    every?: LabWhereInput
    some?: LabWhereInput
    none?: LabWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CollegeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComponentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HODOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type CollegeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
  }

  export type CollegeAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type CollegeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
  }

  export type CollegeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
  }

  export type CollegeSumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
  }

  export type CollegeScalarRelationFilter = {
    is?: CollegeWhereInput
    isNot?: CollegeWhereInput
  }

  export type WarehouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    warehouseId?: SortOrder
  }

  export type WarehouseAvgOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
  }

  export type WarehouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    warehouseId?: SortOrder
  }

  export type WarehouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    warehouseId?: SortOrder
  }

  export type WarehouseSumOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
  }

  export type ComponentRequestListRelationFilter = {
    every?: ComponentRequestWhereInput
    some?: ComponentRequestWhereInput
    none?: ComponentRequestWhereInput
  }

  export type ComponentRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type StaffAvgOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type StaffSumOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StaffScalarRelationFilter = {
    is?: StaffWhereInput
    isNot?: StaffWhereInput
  }

  export type ComponentRequestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    modelNumber?: SortOrder
    serialNumber?: SortOrder
    createdAt?: SortOrder
    staffId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdByStaffId?: SortOrder
  }

  export type ComponentRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    createdByStaffId?: SortOrder
  }

  export type ComponentRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    modelNumber?: SortOrder
    serialNumber?: SortOrder
    createdAt?: SortOrder
    staffId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdByStaffId?: SortOrder
  }

  export type ComponentRequestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    modelNumber?: SortOrder
    serialNumber?: SortOrder
    createdAt?: SortOrder
    staffId?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdByStaffId?: SortOrder
  }

  export type ComponentRequestSumOrderByAggregateInput = {
    id?: SortOrder
    staffId?: SortOrder
    createdByStaffId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HODCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
  }

  export type HODAvgOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
  }

  export type HODMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
  }

  export type HODMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
  }

  export type HODSumOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type LabCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    adminId?: SortOrder
  }

  export type LabAvgOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    adminId?: SortOrder
  }

  export type LabMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    adminId?: SortOrder
  }

  export type LabMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    adminId?: SortOrder
  }

  export type LabSumOrderByAggregateInput = {
    id?: SortOrder
    departmentId?: SortOrder
    adminId?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumComponentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ComponentType | EnumComponentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ComponentType[] | ListEnumComponentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComponentType[] | ListEnumComponentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumComponentTypeFilter<$PrismaModel> | $Enums.ComponentType
  }

  export type WarehouseScalarRelationFilter = {
    is?: WarehouseWhereInput
    isNot?: WarehouseWhereInput
  }

  export type LabScalarRelationFilter = {
    is?: LabWhereInput
    isNot?: LabWhereInput
  }

  export type ComponentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    modelNumber?: SortOrder
    serialNumber?: SortOrder
    collegeId?: SortOrder
    warehouseId?: SortOrder
    adminId?: SortOrder
    labId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type ComponentAvgOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    warehouseId?: SortOrder
    adminId?: SortOrder
    labId?: SortOrder
  }

  export type ComponentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    modelNumber?: SortOrder
    serialNumber?: SortOrder
    collegeId?: SortOrder
    warehouseId?: SortOrder
    adminId?: SortOrder
    labId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type ComponentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    modelNumber?: SortOrder
    serialNumber?: SortOrder
    collegeId?: SortOrder
    warehouseId?: SortOrder
    adminId?: SortOrder
    labId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type ComponentSumOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    warehouseId?: SortOrder
    adminId?: SortOrder
    labId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumComponentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComponentType | EnumComponentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ComponentType[] | ListEnumComponentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComponentType[] | ListEnumComponentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumComponentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ComponentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComponentTypeFilter<$PrismaModel>
    _max?: NestedEnumComponentTypeFilter<$PrismaModel>
  }

  export type HODNullableScalarRelationFilter = {
    is?: HODWhereInput | null
    isNot?: HODWhereInput | null
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    hodId?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    hodId?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    hodId?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    departmentId?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    hodId?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    id?: SortOrder
    collegeId?: SortOrder
    adminId?: SortOrder
    hodId?: SortOrder
  }

  export type ComponentScalarRelationFilter = {
    is?: ComponentWhereInput
    isNot?: ComponentWhereInput
  }

  export type HODScalarRelationFilter = {
    is?: HODWhereInput
    isNot?: HODWhereInput
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    componentId?: SortOrder
    hodId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    departmentId?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    id?: SortOrder
    componentId?: SortOrder
    hodId?: SortOrder
    departmentId?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    componentId?: SortOrder
    hodId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    departmentId?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    componentId?: SortOrder
    hodId?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    departmentId?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    id?: SortOrder
    componentId?: SortOrder
    hodId?: SortOrder
    departmentId?: SortOrder
  }

  export type CollegeCreateNestedManyWithoutAdminInput = {
    create?: XOR<CollegeCreateWithoutAdminInput, CollegeUncheckedCreateWithoutAdminInput> | CollegeCreateWithoutAdminInput[] | CollegeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CollegeCreateOrConnectWithoutAdminInput | CollegeCreateOrConnectWithoutAdminInput[]
    createMany?: CollegeCreateManyAdminInputEnvelope
    connect?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
  }

  export type StaffCreateNestedManyWithoutAdminInput = {
    create?: XOR<StaffCreateWithoutAdminInput, StaffUncheckedCreateWithoutAdminInput> | StaffCreateWithoutAdminInput[] | StaffUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutAdminInput | StaffCreateOrConnectWithoutAdminInput[]
    createMany?: StaffCreateManyAdminInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type WarehouseCreateNestedManyWithoutAdminInput = {
    create?: XOR<WarehouseCreateWithoutAdminInput, WarehouseUncheckedCreateWithoutAdminInput> | WarehouseCreateWithoutAdminInput[] | WarehouseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutAdminInput | WarehouseCreateOrConnectWithoutAdminInput[]
    createMany?: WarehouseCreateManyAdminInputEnvelope
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
  }

  export type ComponentCreateNestedManyWithoutAdminInput = {
    create?: XOR<ComponentCreateWithoutAdminInput, ComponentUncheckedCreateWithoutAdminInput> | ComponentCreateWithoutAdminInput[] | ComponentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutAdminInput | ComponentCreateOrConnectWithoutAdminInput[]
    createMany?: ComponentCreateManyAdminInputEnvelope
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
  }

  export type HODCreateNestedManyWithoutAdminInput = {
    create?: XOR<HODCreateWithoutAdminInput, HODUncheckedCreateWithoutAdminInput> | HODCreateWithoutAdminInput[] | HODUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HODCreateOrConnectWithoutAdminInput | HODCreateOrConnectWithoutAdminInput[]
    createMany?: HODCreateManyAdminInputEnvelope
    connect?: HODWhereUniqueInput | HODWhereUniqueInput[]
  }

  export type DepartmentCreateNestedManyWithoutAdminInput = {
    create?: XOR<DepartmentCreateWithoutAdminInput, DepartmentUncheckedCreateWithoutAdminInput> | DepartmentCreateWithoutAdminInput[] | DepartmentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutAdminInput | DepartmentCreateOrConnectWithoutAdminInput[]
    createMany?: DepartmentCreateManyAdminInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type LabCreateNestedManyWithoutAdminInput = {
    create?: XOR<LabCreateWithoutAdminInput, LabUncheckedCreateWithoutAdminInput> | LabCreateWithoutAdminInput[] | LabUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: LabCreateOrConnectWithoutAdminInput | LabCreateOrConnectWithoutAdminInput[]
    createMany?: LabCreateManyAdminInputEnvelope
    connect?: LabWhereUniqueInput | LabWhereUniqueInput[]
  }

  export type CollegeUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<CollegeCreateWithoutAdminInput, CollegeUncheckedCreateWithoutAdminInput> | CollegeCreateWithoutAdminInput[] | CollegeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CollegeCreateOrConnectWithoutAdminInput | CollegeCreateOrConnectWithoutAdminInput[]
    createMany?: CollegeCreateManyAdminInputEnvelope
    connect?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<StaffCreateWithoutAdminInput, StaffUncheckedCreateWithoutAdminInput> | StaffCreateWithoutAdminInput[] | StaffUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutAdminInput | StaffCreateOrConnectWithoutAdminInput[]
    createMany?: StaffCreateManyAdminInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type WarehouseUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<WarehouseCreateWithoutAdminInput, WarehouseUncheckedCreateWithoutAdminInput> | WarehouseCreateWithoutAdminInput[] | WarehouseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutAdminInput | WarehouseCreateOrConnectWithoutAdminInput[]
    createMany?: WarehouseCreateManyAdminInputEnvelope
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
  }

  export type ComponentUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ComponentCreateWithoutAdminInput, ComponentUncheckedCreateWithoutAdminInput> | ComponentCreateWithoutAdminInput[] | ComponentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutAdminInput | ComponentCreateOrConnectWithoutAdminInput[]
    createMany?: ComponentCreateManyAdminInputEnvelope
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
  }

  export type HODUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<HODCreateWithoutAdminInput, HODUncheckedCreateWithoutAdminInput> | HODCreateWithoutAdminInput[] | HODUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HODCreateOrConnectWithoutAdminInput | HODCreateOrConnectWithoutAdminInput[]
    createMany?: HODCreateManyAdminInputEnvelope
    connect?: HODWhereUniqueInput | HODWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<DepartmentCreateWithoutAdminInput, DepartmentUncheckedCreateWithoutAdminInput> | DepartmentCreateWithoutAdminInput[] | DepartmentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutAdminInput | DepartmentCreateOrConnectWithoutAdminInput[]
    createMany?: DepartmentCreateManyAdminInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type LabUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<LabCreateWithoutAdminInput, LabUncheckedCreateWithoutAdminInput> | LabCreateWithoutAdminInput[] | LabUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: LabCreateOrConnectWithoutAdminInput | LabCreateOrConnectWithoutAdminInput[]
    createMany?: LabCreateManyAdminInputEnvelope
    connect?: LabWhereUniqueInput | LabWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CollegeUpdateManyWithoutAdminNestedInput = {
    create?: XOR<CollegeCreateWithoutAdminInput, CollegeUncheckedCreateWithoutAdminInput> | CollegeCreateWithoutAdminInput[] | CollegeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CollegeCreateOrConnectWithoutAdminInput | CollegeCreateOrConnectWithoutAdminInput[]
    upsert?: CollegeUpsertWithWhereUniqueWithoutAdminInput | CollegeUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: CollegeCreateManyAdminInputEnvelope
    set?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    disconnect?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    delete?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    connect?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    update?: CollegeUpdateWithWhereUniqueWithoutAdminInput | CollegeUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: CollegeUpdateManyWithWhereWithoutAdminInput | CollegeUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: CollegeScalarWhereInput | CollegeScalarWhereInput[]
  }

  export type StaffUpdateManyWithoutAdminNestedInput = {
    create?: XOR<StaffCreateWithoutAdminInput, StaffUncheckedCreateWithoutAdminInput> | StaffCreateWithoutAdminInput[] | StaffUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutAdminInput | StaffCreateOrConnectWithoutAdminInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutAdminInput | StaffUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: StaffCreateManyAdminInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutAdminInput | StaffUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutAdminInput | StaffUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type WarehouseUpdateManyWithoutAdminNestedInput = {
    create?: XOR<WarehouseCreateWithoutAdminInput, WarehouseUncheckedCreateWithoutAdminInput> | WarehouseCreateWithoutAdminInput[] | WarehouseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutAdminInput | WarehouseCreateOrConnectWithoutAdminInput[]
    upsert?: WarehouseUpsertWithWhereUniqueWithoutAdminInput | WarehouseUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: WarehouseCreateManyAdminInputEnvelope
    set?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    disconnect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    delete?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    update?: WarehouseUpdateWithWhereUniqueWithoutAdminInput | WarehouseUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: WarehouseUpdateManyWithWhereWithoutAdminInput | WarehouseUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
  }

  export type ComponentUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ComponentCreateWithoutAdminInput, ComponentUncheckedCreateWithoutAdminInput> | ComponentCreateWithoutAdminInput[] | ComponentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutAdminInput | ComponentCreateOrConnectWithoutAdminInput[]
    upsert?: ComponentUpsertWithWhereUniqueWithoutAdminInput | ComponentUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ComponentCreateManyAdminInputEnvelope
    set?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    disconnect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    delete?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    update?: ComponentUpdateWithWhereUniqueWithoutAdminInput | ComponentUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ComponentUpdateManyWithWhereWithoutAdminInput | ComponentUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
  }

  export type HODUpdateManyWithoutAdminNestedInput = {
    create?: XOR<HODCreateWithoutAdminInput, HODUncheckedCreateWithoutAdminInput> | HODCreateWithoutAdminInput[] | HODUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HODCreateOrConnectWithoutAdminInput | HODCreateOrConnectWithoutAdminInput[]
    upsert?: HODUpsertWithWhereUniqueWithoutAdminInput | HODUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: HODCreateManyAdminInputEnvelope
    set?: HODWhereUniqueInput | HODWhereUniqueInput[]
    disconnect?: HODWhereUniqueInput | HODWhereUniqueInput[]
    delete?: HODWhereUniqueInput | HODWhereUniqueInput[]
    connect?: HODWhereUniqueInput | HODWhereUniqueInput[]
    update?: HODUpdateWithWhereUniqueWithoutAdminInput | HODUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: HODUpdateManyWithWhereWithoutAdminInput | HODUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: HODScalarWhereInput | HODScalarWhereInput[]
  }

  export type DepartmentUpdateManyWithoutAdminNestedInput = {
    create?: XOR<DepartmentCreateWithoutAdminInput, DepartmentUncheckedCreateWithoutAdminInput> | DepartmentCreateWithoutAdminInput[] | DepartmentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutAdminInput | DepartmentCreateOrConnectWithoutAdminInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutAdminInput | DepartmentUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: DepartmentCreateManyAdminInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutAdminInput | DepartmentUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutAdminInput | DepartmentUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type LabUpdateManyWithoutAdminNestedInput = {
    create?: XOR<LabCreateWithoutAdminInput, LabUncheckedCreateWithoutAdminInput> | LabCreateWithoutAdminInput[] | LabUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: LabCreateOrConnectWithoutAdminInput | LabCreateOrConnectWithoutAdminInput[]
    upsert?: LabUpsertWithWhereUniqueWithoutAdminInput | LabUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: LabCreateManyAdminInputEnvelope
    set?: LabWhereUniqueInput | LabWhereUniqueInput[]
    disconnect?: LabWhereUniqueInput | LabWhereUniqueInput[]
    delete?: LabWhereUniqueInput | LabWhereUniqueInput[]
    connect?: LabWhereUniqueInput | LabWhereUniqueInput[]
    update?: LabUpdateWithWhereUniqueWithoutAdminInput | LabUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: LabUpdateManyWithWhereWithoutAdminInput | LabUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: LabScalarWhereInput | LabScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CollegeUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<CollegeCreateWithoutAdminInput, CollegeUncheckedCreateWithoutAdminInput> | CollegeCreateWithoutAdminInput[] | CollegeUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CollegeCreateOrConnectWithoutAdminInput | CollegeCreateOrConnectWithoutAdminInput[]
    upsert?: CollegeUpsertWithWhereUniqueWithoutAdminInput | CollegeUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: CollegeCreateManyAdminInputEnvelope
    set?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    disconnect?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    delete?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    connect?: CollegeWhereUniqueInput | CollegeWhereUniqueInput[]
    update?: CollegeUpdateWithWhereUniqueWithoutAdminInput | CollegeUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: CollegeUpdateManyWithWhereWithoutAdminInput | CollegeUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: CollegeScalarWhereInput | CollegeScalarWhereInput[]
  }

  export type StaffUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<StaffCreateWithoutAdminInput, StaffUncheckedCreateWithoutAdminInput> | StaffCreateWithoutAdminInput[] | StaffUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutAdminInput | StaffCreateOrConnectWithoutAdminInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutAdminInput | StaffUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: StaffCreateManyAdminInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutAdminInput | StaffUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutAdminInput | StaffUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type WarehouseUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<WarehouseCreateWithoutAdminInput, WarehouseUncheckedCreateWithoutAdminInput> | WarehouseCreateWithoutAdminInput[] | WarehouseUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutAdminInput | WarehouseCreateOrConnectWithoutAdminInput[]
    upsert?: WarehouseUpsertWithWhereUniqueWithoutAdminInput | WarehouseUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: WarehouseCreateManyAdminInputEnvelope
    set?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    disconnect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    delete?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    update?: WarehouseUpdateWithWhereUniqueWithoutAdminInput | WarehouseUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: WarehouseUpdateManyWithWhereWithoutAdminInput | WarehouseUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
  }

  export type ComponentUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ComponentCreateWithoutAdminInput, ComponentUncheckedCreateWithoutAdminInput> | ComponentCreateWithoutAdminInput[] | ComponentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutAdminInput | ComponentCreateOrConnectWithoutAdminInput[]
    upsert?: ComponentUpsertWithWhereUniqueWithoutAdminInput | ComponentUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ComponentCreateManyAdminInputEnvelope
    set?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    disconnect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    delete?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    update?: ComponentUpdateWithWhereUniqueWithoutAdminInput | ComponentUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ComponentUpdateManyWithWhereWithoutAdminInput | ComponentUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
  }

  export type HODUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<HODCreateWithoutAdminInput, HODUncheckedCreateWithoutAdminInput> | HODCreateWithoutAdminInput[] | HODUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: HODCreateOrConnectWithoutAdminInput | HODCreateOrConnectWithoutAdminInput[]
    upsert?: HODUpsertWithWhereUniqueWithoutAdminInput | HODUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: HODCreateManyAdminInputEnvelope
    set?: HODWhereUniqueInput | HODWhereUniqueInput[]
    disconnect?: HODWhereUniqueInput | HODWhereUniqueInput[]
    delete?: HODWhereUniqueInput | HODWhereUniqueInput[]
    connect?: HODWhereUniqueInput | HODWhereUniqueInput[]
    update?: HODUpdateWithWhereUniqueWithoutAdminInput | HODUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: HODUpdateManyWithWhereWithoutAdminInput | HODUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: HODScalarWhereInput | HODScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<DepartmentCreateWithoutAdminInput, DepartmentUncheckedCreateWithoutAdminInput> | DepartmentCreateWithoutAdminInput[] | DepartmentUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutAdminInput | DepartmentCreateOrConnectWithoutAdminInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutAdminInput | DepartmentUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: DepartmentCreateManyAdminInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutAdminInput | DepartmentUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutAdminInput | DepartmentUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type LabUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<LabCreateWithoutAdminInput, LabUncheckedCreateWithoutAdminInput> | LabCreateWithoutAdminInput[] | LabUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: LabCreateOrConnectWithoutAdminInput | LabCreateOrConnectWithoutAdminInput[]
    upsert?: LabUpsertWithWhereUniqueWithoutAdminInput | LabUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: LabCreateManyAdminInputEnvelope
    set?: LabWhereUniqueInput | LabWhereUniqueInput[]
    disconnect?: LabWhereUniqueInput | LabWhereUniqueInput[]
    delete?: LabWhereUniqueInput | LabWhereUniqueInput[]
    connect?: LabWhereUniqueInput | LabWhereUniqueInput[]
    update?: LabUpdateWithWhereUniqueWithoutAdminInput | LabUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: LabUpdateManyWithWhereWithoutAdminInput | LabUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: LabScalarWhereInput | LabScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutCollegesInput = {
    create?: XOR<AdminCreateWithoutCollegesInput, AdminUncheckedCreateWithoutCollegesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCollegesInput
    connect?: AdminWhereUniqueInput
  }

  export type StaffCreateNestedManyWithoutCollegeInput = {
    create?: XOR<StaffCreateWithoutCollegeInput, StaffUncheckedCreateWithoutCollegeInput> | StaffCreateWithoutCollegeInput[] | StaffUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutCollegeInput | StaffCreateOrConnectWithoutCollegeInput[]
    createMany?: StaffCreateManyCollegeInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type WarehouseCreateNestedManyWithoutCollegeInput = {
    create?: XOR<WarehouseCreateWithoutCollegeInput, WarehouseUncheckedCreateWithoutCollegeInput> | WarehouseCreateWithoutCollegeInput[] | WarehouseUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutCollegeInput | WarehouseCreateOrConnectWithoutCollegeInput[]
    createMany?: WarehouseCreateManyCollegeInputEnvelope
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
  }

  export type ComponentCreateNestedManyWithoutCollegeInput = {
    create?: XOR<ComponentCreateWithoutCollegeInput, ComponentUncheckedCreateWithoutCollegeInput> | ComponentCreateWithoutCollegeInput[] | ComponentUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutCollegeInput | ComponentCreateOrConnectWithoutCollegeInput[]
    createMany?: ComponentCreateManyCollegeInputEnvelope
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
  }

  export type HODCreateNestedManyWithoutCollegeInput = {
    create?: XOR<HODCreateWithoutCollegeInput, HODUncheckedCreateWithoutCollegeInput> | HODCreateWithoutCollegeInput[] | HODUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: HODCreateOrConnectWithoutCollegeInput | HODCreateOrConnectWithoutCollegeInput[]
    createMany?: HODCreateManyCollegeInputEnvelope
    connect?: HODWhereUniqueInput | HODWhereUniqueInput[]
  }

  export type DepartmentCreateNestedManyWithoutCollegeInput = {
    create?: XOR<DepartmentCreateWithoutCollegeInput, DepartmentUncheckedCreateWithoutCollegeInput> | DepartmentCreateWithoutCollegeInput[] | DepartmentUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCollegeInput | DepartmentCreateOrConnectWithoutCollegeInput[]
    createMany?: DepartmentCreateManyCollegeInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<StaffCreateWithoutCollegeInput, StaffUncheckedCreateWithoutCollegeInput> | StaffCreateWithoutCollegeInput[] | StaffUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutCollegeInput | StaffCreateOrConnectWithoutCollegeInput[]
    createMany?: StaffCreateManyCollegeInputEnvelope
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
  }

  export type WarehouseUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<WarehouseCreateWithoutCollegeInput, WarehouseUncheckedCreateWithoutCollegeInput> | WarehouseCreateWithoutCollegeInput[] | WarehouseUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutCollegeInput | WarehouseCreateOrConnectWithoutCollegeInput[]
    createMany?: WarehouseCreateManyCollegeInputEnvelope
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
  }

  export type ComponentUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<ComponentCreateWithoutCollegeInput, ComponentUncheckedCreateWithoutCollegeInput> | ComponentCreateWithoutCollegeInput[] | ComponentUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutCollegeInput | ComponentCreateOrConnectWithoutCollegeInput[]
    createMany?: ComponentCreateManyCollegeInputEnvelope
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
  }

  export type HODUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<HODCreateWithoutCollegeInput, HODUncheckedCreateWithoutCollegeInput> | HODCreateWithoutCollegeInput[] | HODUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: HODCreateOrConnectWithoutCollegeInput | HODCreateOrConnectWithoutCollegeInput[]
    createMany?: HODCreateManyCollegeInputEnvelope
    connect?: HODWhereUniqueInput | HODWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutCollegeInput = {
    create?: XOR<DepartmentCreateWithoutCollegeInput, DepartmentUncheckedCreateWithoutCollegeInput> | DepartmentCreateWithoutCollegeInput[] | DepartmentUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCollegeInput | DepartmentCreateOrConnectWithoutCollegeInput[]
    createMany?: DepartmentCreateManyCollegeInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type AdminUpdateOneRequiredWithoutCollegesNestedInput = {
    create?: XOR<AdminCreateWithoutCollegesInput, AdminUncheckedCreateWithoutCollegesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCollegesInput
    upsert?: AdminUpsertWithoutCollegesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutCollegesInput, AdminUpdateWithoutCollegesInput>, AdminUncheckedUpdateWithoutCollegesInput>
  }

  export type StaffUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<StaffCreateWithoutCollegeInput, StaffUncheckedCreateWithoutCollegeInput> | StaffCreateWithoutCollegeInput[] | StaffUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutCollegeInput | StaffCreateOrConnectWithoutCollegeInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutCollegeInput | StaffUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: StaffCreateManyCollegeInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutCollegeInput | StaffUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutCollegeInput | StaffUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type WarehouseUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<WarehouseCreateWithoutCollegeInput, WarehouseUncheckedCreateWithoutCollegeInput> | WarehouseCreateWithoutCollegeInput[] | WarehouseUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutCollegeInput | WarehouseCreateOrConnectWithoutCollegeInput[]
    upsert?: WarehouseUpsertWithWhereUniqueWithoutCollegeInput | WarehouseUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: WarehouseCreateManyCollegeInputEnvelope
    set?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    disconnect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    delete?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    update?: WarehouseUpdateWithWhereUniqueWithoutCollegeInput | WarehouseUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: WarehouseUpdateManyWithWhereWithoutCollegeInput | WarehouseUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
  }

  export type ComponentUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<ComponentCreateWithoutCollegeInput, ComponentUncheckedCreateWithoutCollegeInput> | ComponentCreateWithoutCollegeInput[] | ComponentUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutCollegeInput | ComponentCreateOrConnectWithoutCollegeInput[]
    upsert?: ComponentUpsertWithWhereUniqueWithoutCollegeInput | ComponentUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: ComponentCreateManyCollegeInputEnvelope
    set?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    disconnect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    delete?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    update?: ComponentUpdateWithWhereUniqueWithoutCollegeInput | ComponentUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: ComponentUpdateManyWithWhereWithoutCollegeInput | ComponentUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
  }

  export type HODUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<HODCreateWithoutCollegeInput, HODUncheckedCreateWithoutCollegeInput> | HODCreateWithoutCollegeInput[] | HODUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: HODCreateOrConnectWithoutCollegeInput | HODCreateOrConnectWithoutCollegeInput[]
    upsert?: HODUpsertWithWhereUniqueWithoutCollegeInput | HODUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: HODCreateManyCollegeInputEnvelope
    set?: HODWhereUniqueInput | HODWhereUniqueInput[]
    disconnect?: HODWhereUniqueInput | HODWhereUniqueInput[]
    delete?: HODWhereUniqueInput | HODWhereUniqueInput[]
    connect?: HODWhereUniqueInput | HODWhereUniqueInput[]
    update?: HODUpdateWithWhereUniqueWithoutCollegeInput | HODUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: HODUpdateManyWithWhereWithoutCollegeInput | HODUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: HODScalarWhereInput | HODScalarWhereInput[]
  }

  export type DepartmentUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<DepartmentCreateWithoutCollegeInput, DepartmentUncheckedCreateWithoutCollegeInput> | DepartmentCreateWithoutCollegeInput[] | DepartmentUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCollegeInput | DepartmentCreateOrConnectWithoutCollegeInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutCollegeInput | DepartmentUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: DepartmentCreateManyCollegeInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutCollegeInput | DepartmentUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutCollegeInput | DepartmentUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type StaffUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<StaffCreateWithoutCollegeInput, StaffUncheckedCreateWithoutCollegeInput> | StaffCreateWithoutCollegeInput[] | StaffUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: StaffCreateOrConnectWithoutCollegeInput | StaffCreateOrConnectWithoutCollegeInput[]
    upsert?: StaffUpsertWithWhereUniqueWithoutCollegeInput | StaffUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: StaffCreateManyCollegeInputEnvelope
    set?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    disconnect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    delete?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    connect?: StaffWhereUniqueInput | StaffWhereUniqueInput[]
    update?: StaffUpdateWithWhereUniqueWithoutCollegeInput | StaffUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: StaffUpdateManyWithWhereWithoutCollegeInput | StaffUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: StaffScalarWhereInput | StaffScalarWhereInput[]
  }

  export type WarehouseUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<WarehouseCreateWithoutCollegeInput, WarehouseUncheckedCreateWithoutCollegeInput> | WarehouseCreateWithoutCollegeInput[] | WarehouseUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: WarehouseCreateOrConnectWithoutCollegeInput | WarehouseCreateOrConnectWithoutCollegeInput[]
    upsert?: WarehouseUpsertWithWhereUniqueWithoutCollegeInput | WarehouseUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: WarehouseCreateManyCollegeInputEnvelope
    set?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    disconnect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    delete?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    connect?: WarehouseWhereUniqueInput | WarehouseWhereUniqueInput[]
    update?: WarehouseUpdateWithWhereUniqueWithoutCollegeInput | WarehouseUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: WarehouseUpdateManyWithWhereWithoutCollegeInput | WarehouseUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
  }

  export type ComponentUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<ComponentCreateWithoutCollegeInput, ComponentUncheckedCreateWithoutCollegeInput> | ComponentCreateWithoutCollegeInput[] | ComponentUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutCollegeInput | ComponentCreateOrConnectWithoutCollegeInput[]
    upsert?: ComponentUpsertWithWhereUniqueWithoutCollegeInput | ComponentUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: ComponentCreateManyCollegeInputEnvelope
    set?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    disconnect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    delete?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    update?: ComponentUpdateWithWhereUniqueWithoutCollegeInput | ComponentUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: ComponentUpdateManyWithWhereWithoutCollegeInput | ComponentUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
  }

  export type HODUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<HODCreateWithoutCollegeInput, HODUncheckedCreateWithoutCollegeInput> | HODCreateWithoutCollegeInput[] | HODUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: HODCreateOrConnectWithoutCollegeInput | HODCreateOrConnectWithoutCollegeInput[]
    upsert?: HODUpsertWithWhereUniqueWithoutCollegeInput | HODUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: HODCreateManyCollegeInputEnvelope
    set?: HODWhereUniqueInput | HODWhereUniqueInput[]
    disconnect?: HODWhereUniqueInput | HODWhereUniqueInput[]
    delete?: HODWhereUniqueInput | HODWhereUniqueInput[]
    connect?: HODWhereUniqueInput | HODWhereUniqueInput[]
    update?: HODUpdateWithWhereUniqueWithoutCollegeInput | HODUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: HODUpdateManyWithWhereWithoutCollegeInput | HODUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: HODScalarWhereInput | HODScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutCollegeNestedInput = {
    create?: XOR<DepartmentCreateWithoutCollegeInput, DepartmentUncheckedCreateWithoutCollegeInput> | DepartmentCreateWithoutCollegeInput[] | DepartmentUncheckedCreateWithoutCollegeInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCollegeInput | DepartmentCreateOrConnectWithoutCollegeInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutCollegeInput | DepartmentUpsertWithWhereUniqueWithoutCollegeInput[]
    createMany?: DepartmentCreateManyCollegeInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutCollegeInput | DepartmentUpdateWithWhereUniqueWithoutCollegeInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutCollegeInput | DepartmentUpdateManyWithWhereWithoutCollegeInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutWarehousesInput = {
    create?: XOR<AdminCreateWithoutWarehousesInput, AdminUncheckedCreateWithoutWarehousesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutWarehousesInput
    connect?: AdminWhereUniqueInput
  }

  export type CollegeCreateNestedOneWithoutWarehousesInput = {
    create?: XOR<CollegeCreateWithoutWarehousesInput, CollegeUncheckedCreateWithoutWarehousesInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutWarehousesInput
    connect?: CollegeWhereUniqueInput
  }

  export type ComponentCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ComponentCreateWithoutWarehouseInput, ComponentUncheckedCreateWithoutWarehouseInput> | ComponentCreateWithoutWarehouseInput[] | ComponentUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutWarehouseInput | ComponentCreateOrConnectWithoutWarehouseInput[]
    createMany?: ComponentCreateManyWarehouseInputEnvelope
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
  }

  export type ComponentUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<ComponentCreateWithoutWarehouseInput, ComponentUncheckedCreateWithoutWarehouseInput> | ComponentCreateWithoutWarehouseInput[] | ComponentUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutWarehouseInput | ComponentCreateOrConnectWithoutWarehouseInput[]
    createMany?: ComponentCreateManyWarehouseInputEnvelope
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
  }

  export type AdminUpdateOneRequiredWithoutWarehousesNestedInput = {
    create?: XOR<AdminCreateWithoutWarehousesInput, AdminUncheckedCreateWithoutWarehousesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutWarehousesInput
    upsert?: AdminUpsertWithoutWarehousesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutWarehousesInput, AdminUpdateWithoutWarehousesInput>, AdminUncheckedUpdateWithoutWarehousesInput>
  }

  export type CollegeUpdateOneRequiredWithoutWarehousesNestedInput = {
    create?: XOR<CollegeCreateWithoutWarehousesInput, CollegeUncheckedCreateWithoutWarehousesInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutWarehousesInput
    upsert?: CollegeUpsertWithoutWarehousesInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutWarehousesInput, CollegeUpdateWithoutWarehousesInput>, CollegeUncheckedUpdateWithoutWarehousesInput>
  }

  export type ComponentUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ComponentCreateWithoutWarehouseInput, ComponentUncheckedCreateWithoutWarehouseInput> | ComponentCreateWithoutWarehouseInput[] | ComponentUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutWarehouseInput | ComponentCreateOrConnectWithoutWarehouseInput[]
    upsert?: ComponentUpsertWithWhereUniqueWithoutWarehouseInput | ComponentUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ComponentCreateManyWarehouseInputEnvelope
    set?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    disconnect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    delete?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    update?: ComponentUpdateWithWhereUniqueWithoutWarehouseInput | ComponentUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ComponentUpdateManyWithWhereWithoutWarehouseInput | ComponentUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
  }

  export type ComponentUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<ComponentCreateWithoutWarehouseInput, ComponentUncheckedCreateWithoutWarehouseInput> | ComponentCreateWithoutWarehouseInput[] | ComponentUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutWarehouseInput | ComponentCreateOrConnectWithoutWarehouseInput[]
    upsert?: ComponentUpsertWithWhereUniqueWithoutWarehouseInput | ComponentUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: ComponentCreateManyWarehouseInputEnvelope
    set?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    disconnect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    delete?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    update?: ComponentUpdateWithWhereUniqueWithoutWarehouseInput | ComponentUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: ComponentUpdateManyWithWhereWithoutWarehouseInput | ComponentUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutStaffsInput = {
    create?: XOR<AdminCreateWithoutStaffsInput, AdminUncheckedCreateWithoutStaffsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutStaffsInput
    connect?: AdminWhereUniqueInput
  }

  export type CollegeCreateNestedOneWithoutStaffsInput = {
    create?: XOR<CollegeCreateWithoutStaffsInput, CollegeUncheckedCreateWithoutStaffsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutStaffsInput
    connect?: CollegeWhereUniqueInput
  }

  export type ComponentRequestCreateNestedManyWithoutStaffInput = {
    create?: XOR<ComponentRequestCreateWithoutStaffInput, ComponentRequestUncheckedCreateWithoutStaffInput> | ComponentRequestCreateWithoutStaffInput[] | ComponentRequestUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: ComponentRequestCreateOrConnectWithoutStaffInput | ComponentRequestCreateOrConnectWithoutStaffInput[]
    createMany?: ComponentRequestCreateManyStaffInputEnvelope
    connect?: ComponentRequestWhereUniqueInput | ComponentRequestWhereUniqueInput[]
  }

  export type ComponentRequestUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<ComponentRequestCreateWithoutStaffInput, ComponentRequestUncheckedCreateWithoutStaffInput> | ComponentRequestCreateWithoutStaffInput[] | ComponentRequestUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: ComponentRequestCreateOrConnectWithoutStaffInput | ComponentRequestCreateOrConnectWithoutStaffInput[]
    createMany?: ComponentRequestCreateManyStaffInputEnvelope
    connect?: ComponentRequestWhereUniqueInput | ComponentRequestWhereUniqueInput[]
  }

  export type AdminUpdateOneRequiredWithoutStaffsNestedInput = {
    create?: XOR<AdminCreateWithoutStaffsInput, AdminUncheckedCreateWithoutStaffsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutStaffsInput
    upsert?: AdminUpsertWithoutStaffsInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutStaffsInput, AdminUpdateWithoutStaffsInput>, AdminUncheckedUpdateWithoutStaffsInput>
  }

  export type CollegeUpdateOneRequiredWithoutStaffsNestedInput = {
    create?: XOR<CollegeCreateWithoutStaffsInput, CollegeUncheckedCreateWithoutStaffsInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutStaffsInput
    upsert?: CollegeUpsertWithoutStaffsInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutStaffsInput, CollegeUpdateWithoutStaffsInput>, CollegeUncheckedUpdateWithoutStaffsInput>
  }

  export type ComponentRequestUpdateManyWithoutStaffNestedInput = {
    create?: XOR<ComponentRequestCreateWithoutStaffInput, ComponentRequestUncheckedCreateWithoutStaffInput> | ComponentRequestCreateWithoutStaffInput[] | ComponentRequestUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: ComponentRequestCreateOrConnectWithoutStaffInput | ComponentRequestCreateOrConnectWithoutStaffInput[]
    upsert?: ComponentRequestUpsertWithWhereUniqueWithoutStaffInput | ComponentRequestUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: ComponentRequestCreateManyStaffInputEnvelope
    set?: ComponentRequestWhereUniqueInput | ComponentRequestWhereUniqueInput[]
    disconnect?: ComponentRequestWhereUniqueInput | ComponentRequestWhereUniqueInput[]
    delete?: ComponentRequestWhereUniqueInput | ComponentRequestWhereUniqueInput[]
    connect?: ComponentRequestWhereUniqueInput | ComponentRequestWhereUniqueInput[]
    update?: ComponentRequestUpdateWithWhereUniqueWithoutStaffInput | ComponentRequestUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: ComponentRequestUpdateManyWithWhereWithoutStaffInput | ComponentRequestUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: ComponentRequestScalarWhereInput | ComponentRequestScalarWhereInput[]
  }

  export type ComponentRequestUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<ComponentRequestCreateWithoutStaffInput, ComponentRequestUncheckedCreateWithoutStaffInput> | ComponentRequestCreateWithoutStaffInput[] | ComponentRequestUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: ComponentRequestCreateOrConnectWithoutStaffInput | ComponentRequestCreateOrConnectWithoutStaffInput[]
    upsert?: ComponentRequestUpsertWithWhereUniqueWithoutStaffInput | ComponentRequestUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: ComponentRequestCreateManyStaffInputEnvelope
    set?: ComponentRequestWhereUniqueInput | ComponentRequestWhereUniqueInput[]
    disconnect?: ComponentRequestWhereUniqueInput | ComponentRequestWhereUniqueInput[]
    delete?: ComponentRequestWhereUniqueInput | ComponentRequestWhereUniqueInput[]
    connect?: ComponentRequestWhereUniqueInput | ComponentRequestWhereUniqueInput[]
    update?: ComponentRequestUpdateWithWhereUniqueWithoutStaffInput | ComponentRequestUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: ComponentRequestUpdateManyWithWhereWithoutStaffInput | ComponentRequestUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: ComponentRequestScalarWhereInput | ComponentRequestScalarWhereInput[]
  }

  export type StaffCreateNestedOneWithoutComponentRequestInput = {
    create?: XOR<StaffCreateWithoutComponentRequestInput, StaffUncheckedCreateWithoutComponentRequestInput>
    connectOrCreate?: StaffCreateOrConnectWithoutComponentRequestInput
    connect?: StaffWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StaffUpdateOneRequiredWithoutComponentRequestNestedInput = {
    create?: XOR<StaffCreateWithoutComponentRequestInput, StaffUncheckedCreateWithoutComponentRequestInput>
    connectOrCreate?: StaffCreateOrConnectWithoutComponentRequestInput
    upsert?: StaffUpsertWithoutComponentRequestInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutComponentRequestInput, StaffUpdateWithoutComponentRequestInput>, StaffUncheckedUpdateWithoutComponentRequestInput>
  }

  export type AdminCreateNestedOneWithoutHODInput = {
    create?: XOR<AdminCreateWithoutHODInput, AdminUncheckedCreateWithoutHODInput>
    connectOrCreate?: AdminCreateOrConnectWithoutHODInput
    connect?: AdminWhereUniqueInput
  }

  export type CollegeCreateNestedOneWithoutHodInput = {
    create?: XOR<CollegeCreateWithoutHodInput, CollegeUncheckedCreateWithoutHodInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutHodInput
    connect?: CollegeWhereUniqueInput
  }

  export type DepartmentCreateNestedManyWithoutHodInput = {
    create?: XOR<DepartmentCreateWithoutHodInput, DepartmentUncheckedCreateWithoutHodInput> | DepartmentCreateWithoutHodInput[] | DepartmentUncheckedCreateWithoutHodInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutHodInput | DepartmentCreateOrConnectWithoutHodInput[]
    createMany?: DepartmentCreateManyHodInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutHodInput = {
    create?: XOR<ReportCreateWithoutHodInput, ReportUncheckedCreateWithoutHodInput> | ReportCreateWithoutHodInput[] | ReportUncheckedCreateWithoutHodInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutHodInput | ReportCreateOrConnectWithoutHodInput[]
    createMany?: ReportCreateManyHodInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutHodInput = {
    create?: XOR<DepartmentCreateWithoutHodInput, DepartmentUncheckedCreateWithoutHodInput> | DepartmentCreateWithoutHodInput[] | DepartmentUncheckedCreateWithoutHodInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutHodInput | DepartmentCreateOrConnectWithoutHodInput[]
    createMany?: DepartmentCreateManyHodInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutHodInput = {
    create?: XOR<ReportCreateWithoutHodInput, ReportUncheckedCreateWithoutHodInput> | ReportCreateWithoutHodInput[] | ReportUncheckedCreateWithoutHodInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutHodInput | ReportCreateOrConnectWithoutHodInput[]
    createMany?: ReportCreateManyHodInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type AdminUpdateOneRequiredWithoutHODNestedInput = {
    create?: XOR<AdminCreateWithoutHODInput, AdminUncheckedCreateWithoutHODInput>
    connectOrCreate?: AdminCreateOrConnectWithoutHODInput
    upsert?: AdminUpsertWithoutHODInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutHODInput, AdminUpdateWithoutHODInput>, AdminUncheckedUpdateWithoutHODInput>
  }

  export type CollegeUpdateOneRequiredWithoutHodNestedInput = {
    create?: XOR<CollegeCreateWithoutHodInput, CollegeUncheckedCreateWithoutHodInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutHodInput
    upsert?: CollegeUpsertWithoutHodInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutHodInput, CollegeUpdateWithoutHodInput>, CollegeUncheckedUpdateWithoutHodInput>
  }

  export type DepartmentUpdateManyWithoutHodNestedInput = {
    create?: XOR<DepartmentCreateWithoutHodInput, DepartmentUncheckedCreateWithoutHodInput> | DepartmentCreateWithoutHodInput[] | DepartmentUncheckedCreateWithoutHodInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutHodInput | DepartmentCreateOrConnectWithoutHodInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutHodInput | DepartmentUpsertWithWhereUniqueWithoutHodInput[]
    createMany?: DepartmentCreateManyHodInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutHodInput | DepartmentUpdateWithWhereUniqueWithoutHodInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutHodInput | DepartmentUpdateManyWithWhereWithoutHodInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutHodNestedInput = {
    create?: XOR<ReportCreateWithoutHodInput, ReportUncheckedCreateWithoutHodInput> | ReportCreateWithoutHodInput[] | ReportUncheckedCreateWithoutHodInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutHodInput | ReportCreateOrConnectWithoutHodInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutHodInput | ReportUpsertWithWhereUniqueWithoutHodInput[]
    createMany?: ReportCreateManyHodInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutHodInput | ReportUpdateWithWhereUniqueWithoutHodInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutHodInput | ReportUpdateManyWithWhereWithoutHodInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutHodNestedInput = {
    create?: XOR<DepartmentCreateWithoutHodInput, DepartmentUncheckedCreateWithoutHodInput> | DepartmentCreateWithoutHodInput[] | DepartmentUncheckedCreateWithoutHodInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutHodInput | DepartmentCreateOrConnectWithoutHodInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutHodInput | DepartmentUpsertWithWhereUniqueWithoutHodInput[]
    createMany?: DepartmentCreateManyHodInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutHodInput | DepartmentUpdateWithWhereUniqueWithoutHodInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutHodInput | DepartmentUpdateManyWithWhereWithoutHodInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutHodNestedInput = {
    create?: XOR<ReportCreateWithoutHodInput, ReportUncheckedCreateWithoutHodInput> | ReportCreateWithoutHodInput[] | ReportUncheckedCreateWithoutHodInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutHodInput | ReportCreateOrConnectWithoutHodInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutHodInput | ReportUpsertWithWhereUniqueWithoutHodInput[]
    createMany?: ReportCreateManyHodInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutHodInput | ReportUpdateWithWhereUniqueWithoutHodInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutHodInput | ReportUpdateManyWithWhereWithoutHodInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutLabInput = {
    create?: XOR<DepartmentCreateWithoutLabInput, DepartmentUncheckedCreateWithoutLabInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutLabInput
    connect?: DepartmentWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutLabInput = {
    create?: XOR<AdminCreateWithoutLabInput, AdminUncheckedCreateWithoutLabInput>
    connectOrCreate?: AdminCreateOrConnectWithoutLabInput
    connect?: AdminWhereUniqueInput
  }

  export type ComponentCreateNestedManyWithoutLabInput = {
    create?: XOR<ComponentCreateWithoutLabInput, ComponentUncheckedCreateWithoutLabInput> | ComponentCreateWithoutLabInput[] | ComponentUncheckedCreateWithoutLabInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutLabInput | ComponentCreateOrConnectWithoutLabInput[]
    createMany?: ComponentCreateManyLabInputEnvelope
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
  }

  export type ComponentUncheckedCreateNestedManyWithoutLabInput = {
    create?: XOR<ComponentCreateWithoutLabInput, ComponentUncheckedCreateWithoutLabInput> | ComponentCreateWithoutLabInput[] | ComponentUncheckedCreateWithoutLabInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutLabInput | ComponentCreateOrConnectWithoutLabInput[]
    createMany?: ComponentCreateManyLabInputEnvelope
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
  }

  export type DepartmentUpdateOneRequiredWithoutLabNestedInput = {
    create?: XOR<DepartmentCreateWithoutLabInput, DepartmentUncheckedCreateWithoutLabInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutLabInput
    upsert?: DepartmentUpsertWithoutLabInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutLabInput, DepartmentUpdateWithoutLabInput>, DepartmentUncheckedUpdateWithoutLabInput>
  }

  export type AdminUpdateOneWithoutLabNestedInput = {
    create?: XOR<AdminCreateWithoutLabInput, AdminUncheckedCreateWithoutLabInput>
    connectOrCreate?: AdminCreateOrConnectWithoutLabInput
    upsert?: AdminUpsertWithoutLabInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutLabInput, AdminUpdateWithoutLabInput>, AdminUncheckedUpdateWithoutLabInput>
  }

  export type ComponentUpdateManyWithoutLabNestedInput = {
    create?: XOR<ComponentCreateWithoutLabInput, ComponentUncheckedCreateWithoutLabInput> | ComponentCreateWithoutLabInput[] | ComponentUncheckedCreateWithoutLabInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutLabInput | ComponentCreateOrConnectWithoutLabInput[]
    upsert?: ComponentUpsertWithWhereUniqueWithoutLabInput | ComponentUpsertWithWhereUniqueWithoutLabInput[]
    createMany?: ComponentCreateManyLabInputEnvelope
    set?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    disconnect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    delete?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    update?: ComponentUpdateWithWhereUniqueWithoutLabInput | ComponentUpdateWithWhereUniqueWithoutLabInput[]
    updateMany?: ComponentUpdateManyWithWhereWithoutLabInput | ComponentUpdateManyWithWhereWithoutLabInput[]
    deleteMany?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
  }

  export type ComponentUncheckedUpdateManyWithoutLabNestedInput = {
    create?: XOR<ComponentCreateWithoutLabInput, ComponentUncheckedCreateWithoutLabInput> | ComponentCreateWithoutLabInput[] | ComponentUncheckedCreateWithoutLabInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutLabInput | ComponentCreateOrConnectWithoutLabInput[]
    upsert?: ComponentUpsertWithWhereUniqueWithoutLabInput | ComponentUpsertWithWhereUniqueWithoutLabInput[]
    createMany?: ComponentCreateManyLabInputEnvelope
    set?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    disconnect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    delete?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    update?: ComponentUpdateWithWhereUniqueWithoutLabInput | ComponentUpdateWithWhereUniqueWithoutLabInput[]
    updateMany?: ComponentUpdateManyWithWhereWithoutLabInput | ComponentUpdateManyWithWhereWithoutLabInput[]
    deleteMany?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutComponentInput = {
    create?: XOR<AdminCreateWithoutComponentInput, AdminUncheckedCreateWithoutComponentInput>
    connectOrCreate?: AdminCreateOrConnectWithoutComponentInput
    connect?: AdminWhereUniqueInput
  }

  export type CollegeCreateNestedOneWithoutComponentInput = {
    create?: XOR<CollegeCreateWithoutComponentInput, CollegeUncheckedCreateWithoutComponentInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutComponentInput
    connect?: CollegeWhereUniqueInput
  }

  export type WarehouseCreateNestedOneWithoutComponentInput = {
    create?: XOR<WarehouseCreateWithoutComponentInput, WarehouseUncheckedCreateWithoutComponentInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutComponentInput
    connect?: WarehouseWhereUniqueInput
  }

  export type LabCreateNestedOneWithoutComponentsInput = {
    create?: XOR<LabCreateWithoutComponentsInput, LabUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: LabCreateOrConnectWithoutComponentsInput
    connect?: LabWhereUniqueInput
  }

  export type ReportCreateNestedManyWithoutComponentInput = {
    create?: XOR<ReportCreateWithoutComponentInput, ReportUncheckedCreateWithoutComponentInput> | ReportCreateWithoutComponentInput[] | ReportUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutComponentInput | ReportCreateOrConnectWithoutComponentInput[]
    createMany?: ReportCreateManyComponentInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type DepartmentCreateNestedManyWithoutComponentsInput = {
    create?: XOR<DepartmentCreateWithoutComponentsInput, DepartmentUncheckedCreateWithoutComponentsInput> | DepartmentCreateWithoutComponentsInput[] | DepartmentUncheckedCreateWithoutComponentsInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutComponentsInput | DepartmentCreateOrConnectWithoutComponentsInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutComponentInput = {
    create?: XOR<ReportCreateWithoutComponentInput, ReportUncheckedCreateWithoutComponentInput> | ReportCreateWithoutComponentInput[] | ReportUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutComponentInput | ReportCreateOrConnectWithoutComponentInput[]
    createMany?: ReportCreateManyComponentInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutComponentsInput = {
    create?: XOR<DepartmentCreateWithoutComponentsInput, DepartmentUncheckedCreateWithoutComponentsInput> | DepartmentCreateWithoutComponentsInput[] | DepartmentUncheckedCreateWithoutComponentsInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutComponentsInput | DepartmentCreateOrConnectWithoutComponentsInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumComponentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ComponentType
  }

  export type AdminUpdateOneRequiredWithoutComponentNestedInput = {
    create?: XOR<AdminCreateWithoutComponentInput, AdminUncheckedCreateWithoutComponentInput>
    connectOrCreate?: AdminCreateOrConnectWithoutComponentInput
    upsert?: AdminUpsertWithoutComponentInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutComponentInput, AdminUpdateWithoutComponentInput>, AdminUncheckedUpdateWithoutComponentInput>
  }

  export type CollegeUpdateOneRequiredWithoutComponentNestedInput = {
    create?: XOR<CollegeCreateWithoutComponentInput, CollegeUncheckedCreateWithoutComponentInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutComponentInput
    upsert?: CollegeUpsertWithoutComponentInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutComponentInput, CollegeUpdateWithoutComponentInput>, CollegeUncheckedUpdateWithoutComponentInput>
  }

  export type WarehouseUpdateOneRequiredWithoutComponentNestedInput = {
    create?: XOR<WarehouseCreateWithoutComponentInput, WarehouseUncheckedCreateWithoutComponentInput>
    connectOrCreate?: WarehouseCreateOrConnectWithoutComponentInput
    upsert?: WarehouseUpsertWithoutComponentInput
    connect?: WarehouseWhereUniqueInput
    update?: XOR<XOR<WarehouseUpdateToOneWithWhereWithoutComponentInput, WarehouseUpdateWithoutComponentInput>, WarehouseUncheckedUpdateWithoutComponentInput>
  }

  export type LabUpdateOneRequiredWithoutComponentsNestedInput = {
    create?: XOR<LabCreateWithoutComponentsInput, LabUncheckedCreateWithoutComponentsInput>
    connectOrCreate?: LabCreateOrConnectWithoutComponentsInput
    upsert?: LabUpsertWithoutComponentsInput
    connect?: LabWhereUniqueInput
    update?: XOR<XOR<LabUpdateToOneWithWhereWithoutComponentsInput, LabUpdateWithoutComponentsInput>, LabUncheckedUpdateWithoutComponentsInput>
  }

  export type ReportUpdateManyWithoutComponentNestedInput = {
    create?: XOR<ReportCreateWithoutComponentInput, ReportUncheckedCreateWithoutComponentInput> | ReportCreateWithoutComponentInput[] | ReportUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutComponentInput | ReportCreateOrConnectWithoutComponentInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutComponentInput | ReportUpsertWithWhereUniqueWithoutComponentInput[]
    createMany?: ReportCreateManyComponentInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutComponentInput | ReportUpdateWithWhereUniqueWithoutComponentInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutComponentInput | ReportUpdateManyWithWhereWithoutComponentInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type DepartmentUpdateManyWithoutComponentsNestedInput = {
    create?: XOR<DepartmentCreateWithoutComponentsInput, DepartmentUncheckedCreateWithoutComponentsInput> | DepartmentCreateWithoutComponentsInput[] | DepartmentUncheckedCreateWithoutComponentsInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutComponentsInput | DepartmentCreateOrConnectWithoutComponentsInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutComponentsInput | DepartmentUpsertWithWhereUniqueWithoutComponentsInput[]
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutComponentsInput | DepartmentUpdateWithWhereUniqueWithoutComponentsInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutComponentsInput | DepartmentUpdateManyWithWhereWithoutComponentsInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutComponentNestedInput = {
    create?: XOR<ReportCreateWithoutComponentInput, ReportUncheckedCreateWithoutComponentInput> | ReportCreateWithoutComponentInput[] | ReportUncheckedCreateWithoutComponentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutComponentInput | ReportCreateOrConnectWithoutComponentInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutComponentInput | ReportUpsertWithWhereUniqueWithoutComponentInput[]
    createMany?: ReportCreateManyComponentInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutComponentInput | ReportUpdateWithWhereUniqueWithoutComponentInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutComponentInput | ReportUpdateManyWithWhereWithoutComponentInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutComponentsNestedInput = {
    create?: XOR<DepartmentCreateWithoutComponentsInput, DepartmentUncheckedCreateWithoutComponentsInput> | DepartmentCreateWithoutComponentsInput[] | DepartmentUncheckedCreateWithoutComponentsInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutComponentsInput | DepartmentCreateOrConnectWithoutComponentsInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutComponentsInput | DepartmentUpsertWithWhereUniqueWithoutComponentsInput[]
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutComponentsInput | DepartmentUpdateWithWhereUniqueWithoutComponentsInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutComponentsInput | DepartmentUpdateManyWithWhereWithoutComponentsInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutDepartmentInput = {
    create?: XOR<AdminCreateWithoutDepartmentInput, AdminUncheckedCreateWithoutDepartmentInput>
    connectOrCreate?: AdminCreateOrConnectWithoutDepartmentInput
    connect?: AdminWhereUniqueInput
  }

  export type CollegeCreateNestedOneWithoutDepartmentInput = {
    create?: XOR<CollegeCreateWithoutDepartmentInput, CollegeUncheckedCreateWithoutDepartmentInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutDepartmentInput
    connect?: CollegeWhereUniqueInput
  }

  export type HODCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<HODCreateWithoutDepartmentsInput, HODUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: HODCreateOrConnectWithoutDepartmentsInput
    connect?: HODWhereUniqueInput
  }

  export type LabCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<LabCreateWithoutDepartmentInput, LabUncheckedCreateWithoutDepartmentInput> | LabCreateWithoutDepartmentInput[] | LabUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: LabCreateOrConnectWithoutDepartmentInput | LabCreateOrConnectWithoutDepartmentInput[]
    createMany?: LabCreateManyDepartmentInputEnvelope
    connect?: LabWhereUniqueInput | LabWhereUniqueInput[]
  }

  export type ComponentCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ComponentCreateWithoutDepartmentInput, ComponentUncheckedCreateWithoutDepartmentInput> | ComponentCreateWithoutDepartmentInput[] | ComponentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutDepartmentInput | ComponentCreateOrConnectWithoutDepartmentInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ReportCreateWithoutDepartmentInput, ReportUncheckedCreateWithoutDepartmentInput> | ReportCreateWithoutDepartmentInput[] | ReportUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutDepartmentInput | ReportCreateOrConnectWithoutDepartmentInput[]
    createMany?: ReportCreateManyDepartmentInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type LabUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<LabCreateWithoutDepartmentInput, LabUncheckedCreateWithoutDepartmentInput> | LabCreateWithoutDepartmentInput[] | LabUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: LabCreateOrConnectWithoutDepartmentInput | LabCreateOrConnectWithoutDepartmentInput[]
    createMany?: LabCreateManyDepartmentInputEnvelope
    connect?: LabWhereUniqueInput | LabWhereUniqueInput[]
  }

  export type ComponentUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ComponentCreateWithoutDepartmentInput, ComponentUncheckedCreateWithoutDepartmentInput> | ComponentCreateWithoutDepartmentInput[] | ComponentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutDepartmentInput | ComponentCreateOrConnectWithoutDepartmentInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ReportCreateWithoutDepartmentInput, ReportUncheckedCreateWithoutDepartmentInput> | ReportCreateWithoutDepartmentInput[] | ReportUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutDepartmentInput | ReportCreateOrConnectWithoutDepartmentInput[]
    createMany?: ReportCreateManyDepartmentInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type AdminUpdateOneRequiredWithoutDepartmentNestedInput = {
    create?: XOR<AdminCreateWithoutDepartmentInput, AdminUncheckedCreateWithoutDepartmentInput>
    connectOrCreate?: AdminCreateOrConnectWithoutDepartmentInput
    upsert?: AdminUpsertWithoutDepartmentInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutDepartmentInput, AdminUpdateWithoutDepartmentInput>, AdminUncheckedUpdateWithoutDepartmentInput>
  }

  export type CollegeUpdateOneRequiredWithoutDepartmentNestedInput = {
    create?: XOR<CollegeCreateWithoutDepartmentInput, CollegeUncheckedCreateWithoutDepartmentInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutDepartmentInput
    upsert?: CollegeUpsertWithoutDepartmentInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutDepartmentInput, CollegeUpdateWithoutDepartmentInput>, CollegeUncheckedUpdateWithoutDepartmentInput>
  }

  export type HODUpdateOneWithoutDepartmentsNestedInput = {
    create?: XOR<HODCreateWithoutDepartmentsInput, HODUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: HODCreateOrConnectWithoutDepartmentsInput
    upsert?: HODUpsertWithoutDepartmentsInput
    disconnect?: HODWhereInput | boolean
    delete?: HODWhereInput | boolean
    connect?: HODWhereUniqueInput
    update?: XOR<XOR<HODUpdateToOneWithWhereWithoutDepartmentsInput, HODUpdateWithoutDepartmentsInput>, HODUncheckedUpdateWithoutDepartmentsInput>
  }

  export type LabUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<LabCreateWithoutDepartmentInput, LabUncheckedCreateWithoutDepartmentInput> | LabCreateWithoutDepartmentInput[] | LabUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: LabCreateOrConnectWithoutDepartmentInput | LabCreateOrConnectWithoutDepartmentInput[]
    upsert?: LabUpsertWithWhereUniqueWithoutDepartmentInput | LabUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: LabCreateManyDepartmentInputEnvelope
    set?: LabWhereUniqueInput | LabWhereUniqueInput[]
    disconnect?: LabWhereUniqueInput | LabWhereUniqueInput[]
    delete?: LabWhereUniqueInput | LabWhereUniqueInput[]
    connect?: LabWhereUniqueInput | LabWhereUniqueInput[]
    update?: LabUpdateWithWhereUniqueWithoutDepartmentInput | LabUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: LabUpdateManyWithWhereWithoutDepartmentInput | LabUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: LabScalarWhereInput | LabScalarWhereInput[]
  }

  export type ComponentUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ComponentCreateWithoutDepartmentInput, ComponentUncheckedCreateWithoutDepartmentInput> | ComponentCreateWithoutDepartmentInput[] | ComponentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutDepartmentInput | ComponentCreateOrConnectWithoutDepartmentInput[]
    upsert?: ComponentUpsertWithWhereUniqueWithoutDepartmentInput | ComponentUpsertWithWhereUniqueWithoutDepartmentInput[]
    set?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    disconnect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    delete?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    update?: ComponentUpdateWithWhereUniqueWithoutDepartmentInput | ComponentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ComponentUpdateManyWithWhereWithoutDepartmentInput | ComponentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ReportCreateWithoutDepartmentInput, ReportUncheckedCreateWithoutDepartmentInput> | ReportCreateWithoutDepartmentInput[] | ReportUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutDepartmentInput | ReportCreateOrConnectWithoutDepartmentInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutDepartmentInput | ReportUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: ReportCreateManyDepartmentInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutDepartmentInput | ReportUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutDepartmentInput | ReportUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type LabUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<LabCreateWithoutDepartmentInput, LabUncheckedCreateWithoutDepartmentInput> | LabCreateWithoutDepartmentInput[] | LabUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: LabCreateOrConnectWithoutDepartmentInput | LabCreateOrConnectWithoutDepartmentInput[]
    upsert?: LabUpsertWithWhereUniqueWithoutDepartmentInput | LabUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: LabCreateManyDepartmentInputEnvelope
    set?: LabWhereUniqueInput | LabWhereUniqueInput[]
    disconnect?: LabWhereUniqueInput | LabWhereUniqueInput[]
    delete?: LabWhereUniqueInput | LabWhereUniqueInput[]
    connect?: LabWhereUniqueInput | LabWhereUniqueInput[]
    update?: LabUpdateWithWhereUniqueWithoutDepartmentInput | LabUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: LabUpdateManyWithWhereWithoutDepartmentInput | LabUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: LabScalarWhereInput | LabScalarWhereInput[]
  }

  export type ComponentUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ComponentCreateWithoutDepartmentInput, ComponentUncheckedCreateWithoutDepartmentInput> | ComponentCreateWithoutDepartmentInput[] | ComponentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ComponentCreateOrConnectWithoutDepartmentInput | ComponentCreateOrConnectWithoutDepartmentInput[]
    upsert?: ComponentUpsertWithWhereUniqueWithoutDepartmentInput | ComponentUpsertWithWhereUniqueWithoutDepartmentInput[]
    set?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    disconnect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    delete?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    connect?: ComponentWhereUniqueInput | ComponentWhereUniqueInput[]
    update?: ComponentUpdateWithWhereUniqueWithoutDepartmentInput | ComponentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ComponentUpdateManyWithWhereWithoutDepartmentInput | ComponentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ReportCreateWithoutDepartmentInput, ReportUncheckedCreateWithoutDepartmentInput> | ReportCreateWithoutDepartmentInput[] | ReportUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutDepartmentInput | ReportCreateOrConnectWithoutDepartmentInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutDepartmentInput | ReportUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: ReportCreateManyDepartmentInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutDepartmentInput | ReportUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutDepartmentInput | ReportUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutReportInput = {
    create?: XOR<DepartmentCreateWithoutReportInput, DepartmentUncheckedCreateWithoutReportInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutReportInput
    connect?: DepartmentWhereUniqueInput
  }

  export type ComponentCreateNestedOneWithoutReportInput = {
    create?: XOR<ComponentCreateWithoutReportInput, ComponentUncheckedCreateWithoutReportInput>
    connectOrCreate?: ComponentCreateOrConnectWithoutReportInput
    connect?: ComponentWhereUniqueInput
  }

  export type HODCreateNestedOneWithoutReportInput = {
    create?: XOR<HODCreateWithoutReportInput, HODUncheckedCreateWithoutReportInput>
    connectOrCreate?: HODCreateOrConnectWithoutReportInput
    connect?: HODWhereUniqueInput
  }

  export type DepartmentUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<DepartmentCreateWithoutReportInput, DepartmentUncheckedCreateWithoutReportInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutReportInput
    upsert?: DepartmentUpsertWithoutReportInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutReportInput, DepartmentUpdateWithoutReportInput>, DepartmentUncheckedUpdateWithoutReportInput>
  }

  export type ComponentUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<ComponentCreateWithoutReportInput, ComponentUncheckedCreateWithoutReportInput>
    connectOrCreate?: ComponentCreateOrConnectWithoutReportInput
    upsert?: ComponentUpsertWithoutReportInput
    connect?: ComponentWhereUniqueInput
    update?: XOR<XOR<ComponentUpdateToOneWithWhereWithoutReportInput, ComponentUpdateWithoutReportInput>, ComponentUncheckedUpdateWithoutReportInput>
  }

  export type HODUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<HODCreateWithoutReportInput, HODUncheckedCreateWithoutReportInput>
    connectOrCreate?: HODCreateOrConnectWithoutReportInput
    upsert?: HODUpsertWithoutReportInput
    connect?: HODWhereUniqueInput
    update?: XOR<XOR<HODUpdateToOneWithWhereWithoutReportInput, HODUpdateWithoutReportInput>, HODUncheckedUpdateWithoutReportInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumComponentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ComponentType | EnumComponentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ComponentType[] | ListEnumComponentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComponentType[] | ListEnumComponentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumComponentTypeFilter<$PrismaModel> | $Enums.ComponentType
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumComponentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComponentType | EnumComponentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ComponentType[] | ListEnumComponentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComponentType[] | ListEnumComponentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumComponentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ComponentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComponentTypeFilter<$PrismaModel>
    _max?: NestedEnumComponentTypeFilter<$PrismaModel>
  }

  export type CollegeCreateWithoutAdminInput = {
    name: string
    address: string
    collegeId: string
    staffs?: StaffCreateNestedManyWithoutCollegeInput
    warehouses?: WarehouseCreateNestedManyWithoutCollegeInput
    component?: ComponentCreateNestedManyWithoutCollegeInput
    hod?: HODCreateNestedManyWithoutCollegeInput
    Department?: DepartmentCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    address: string
    collegeId: string
    staffs?: StaffUncheckedCreateNestedManyWithoutCollegeInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutCollegeInput
    component?: ComponentUncheckedCreateNestedManyWithoutCollegeInput
    hod?: HODUncheckedCreateNestedManyWithoutCollegeInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutAdminInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutAdminInput, CollegeUncheckedCreateWithoutAdminInput>
  }

  export type CollegeCreateManyAdminInputEnvelope = {
    data: CollegeCreateManyAdminInput | CollegeCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type StaffCreateWithoutAdminInput = {
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    college: CollegeCreateNestedOneWithoutStaffsInput
    componentRequest?: ComponentRequestCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    collegeId: number
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    componentRequest?: ComponentRequestUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutAdminInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutAdminInput, StaffUncheckedCreateWithoutAdminInput>
  }

  export type StaffCreateManyAdminInputEnvelope = {
    data: StaffCreateManyAdminInput | StaffCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseCreateWithoutAdminInput = {
    name: string
    warehouseId: string
    college: CollegeCreateNestedOneWithoutWarehousesInput
    component?: ComponentCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    collegeId: number
    warehouseId: string
    component?: ComponentUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutAdminInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutAdminInput, WarehouseUncheckedCreateWithoutAdminInput>
  }

  export type WarehouseCreateManyAdminInputEnvelope = {
    data: WarehouseCreateManyAdminInput | WarehouseCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ComponentCreateWithoutAdminInput = {
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    college: CollegeCreateNestedOneWithoutComponentInput
    warehouse: WarehouseCreateNestedOneWithoutComponentInput
    lab: LabCreateNestedOneWithoutComponentsInput
    Report?: ReportCreateNestedManyWithoutComponentInput
    Department?: DepartmentCreateNestedManyWithoutComponentsInput
  }

  export type ComponentUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    collegeId: number
    warehouseId: number
    labId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    Report?: ReportUncheckedCreateNestedManyWithoutComponentInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutComponentsInput
  }

  export type ComponentCreateOrConnectWithoutAdminInput = {
    where: ComponentWhereUniqueInput
    create: XOR<ComponentCreateWithoutAdminInput, ComponentUncheckedCreateWithoutAdminInput>
  }

  export type ComponentCreateManyAdminInputEnvelope = {
    data: ComponentCreateManyAdminInput | ComponentCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type HODCreateWithoutAdminInput = {
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    college: CollegeCreateNestedOneWithoutHodInput
    departments?: DepartmentCreateNestedManyWithoutHodInput
    Report?: ReportCreateNestedManyWithoutHodInput
  }

  export type HODUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    collegeId: number
    role?: $Enums.Role
    departments?: DepartmentUncheckedCreateNestedManyWithoutHodInput
    Report?: ReportUncheckedCreateNestedManyWithoutHodInput
  }

  export type HODCreateOrConnectWithoutAdminInput = {
    where: HODWhereUniqueInput
    create: XOR<HODCreateWithoutAdminInput, HODUncheckedCreateWithoutAdminInput>
  }

  export type HODCreateManyAdminInputEnvelope = {
    data: HODCreateManyAdminInput | HODCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutAdminInput = {
    name: string
    departmentId: string
    college: CollegeCreateNestedOneWithoutDepartmentInput
    hod?: HODCreateNestedOneWithoutDepartmentsInput
    Lab?: LabCreateNestedManyWithoutDepartmentInput
    components?: ComponentCreateNestedManyWithoutDepartmentInput
    Report?: ReportCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    departmentId: string
    collegeId: number
    hodId?: number | null
    Lab?: LabUncheckedCreateNestedManyWithoutDepartmentInput
    components?: ComponentUncheckedCreateNestedManyWithoutDepartmentInput
    Report?: ReportUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutAdminInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutAdminInput, DepartmentUncheckedCreateWithoutAdminInput>
  }

  export type DepartmentCreateManyAdminInputEnvelope = {
    data: DepartmentCreateManyAdminInput | DepartmentCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type LabCreateWithoutAdminInput = {
    name: string
    department: DepartmentCreateNestedOneWithoutLabInput
    components?: ComponentCreateNestedManyWithoutLabInput
  }

  export type LabUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    departmentId: number
    components?: ComponentUncheckedCreateNestedManyWithoutLabInput
  }

  export type LabCreateOrConnectWithoutAdminInput = {
    where: LabWhereUniqueInput
    create: XOR<LabCreateWithoutAdminInput, LabUncheckedCreateWithoutAdminInput>
  }

  export type LabCreateManyAdminInputEnvelope = {
    data: LabCreateManyAdminInput | LabCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type CollegeUpsertWithWhereUniqueWithoutAdminInput = {
    where: CollegeWhereUniqueInput
    update: XOR<CollegeUpdateWithoutAdminInput, CollegeUncheckedUpdateWithoutAdminInput>
    create: XOR<CollegeCreateWithoutAdminInput, CollegeUncheckedCreateWithoutAdminInput>
  }

  export type CollegeUpdateWithWhereUniqueWithoutAdminInput = {
    where: CollegeWhereUniqueInput
    data: XOR<CollegeUpdateWithoutAdminInput, CollegeUncheckedUpdateWithoutAdminInput>
  }

  export type CollegeUpdateManyWithWhereWithoutAdminInput = {
    where: CollegeScalarWhereInput
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyWithoutAdminInput>
  }

  export type CollegeScalarWhereInput = {
    AND?: CollegeScalarWhereInput | CollegeScalarWhereInput[]
    OR?: CollegeScalarWhereInput[]
    NOT?: CollegeScalarWhereInput | CollegeScalarWhereInput[]
    id?: IntFilter<"College"> | number
    name?: StringFilter<"College"> | string
    address?: StringFilter<"College"> | string
    collegeId?: StringFilter<"College"> | string
    adminId?: IntFilter<"College"> | number
  }

  export type StaffUpsertWithWhereUniqueWithoutAdminInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutAdminInput, StaffUncheckedUpdateWithoutAdminInput>
    create: XOR<StaffCreateWithoutAdminInput, StaffUncheckedCreateWithoutAdminInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutAdminInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutAdminInput, StaffUncheckedUpdateWithoutAdminInput>
  }

  export type StaffUpdateManyWithWhereWithoutAdminInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutAdminInput>
  }

  export type StaffScalarWhereInput = {
    AND?: StaffScalarWhereInput | StaffScalarWhereInput[]
    OR?: StaffScalarWhereInput[]
    NOT?: StaffScalarWhereInput | StaffScalarWhereInput[]
    id?: IntFilter<"Staff"> | number
    name?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    password?: StringFilter<"Staff"> | string
    phone?: StringFilter<"Staff"> | string
    collegeId?: IntFilter<"Staff"> | number
    adminId?: IntFilter<"Staff"> | number
    role?: EnumRoleFilter<"Staff"> | $Enums.Role
    resetToken?: StringNullableFilter<"Staff"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"Staff"> | Date | string | null
  }

  export type WarehouseUpsertWithWhereUniqueWithoutAdminInput = {
    where: WarehouseWhereUniqueInput
    update: XOR<WarehouseUpdateWithoutAdminInput, WarehouseUncheckedUpdateWithoutAdminInput>
    create: XOR<WarehouseCreateWithoutAdminInput, WarehouseUncheckedCreateWithoutAdminInput>
  }

  export type WarehouseUpdateWithWhereUniqueWithoutAdminInput = {
    where: WarehouseWhereUniqueInput
    data: XOR<WarehouseUpdateWithoutAdminInput, WarehouseUncheckedUpdateWithoutAdminInput>
  }

  export type WarehouseUpdateManyWithWhereWithoutAdminInput = {
    where: WarehouseScalarWhereInput
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyWithoutAdminInput>
  }

  export type WarehouseScalarWhereInput = {
    AND?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
    OR?: WarehouseScalarWhereInput[]
    NOT?: WarehouseScalarWhereInput | WarehouseScalarWhereInput[]
    id?: IntFilter<"Warehouse"> | number
    name?: StringFilter<"Warehouse"> | string
    collegeId?: IntFilter<"Warehouse"> | number
    adminId?: IntFilter<"Warehouse"> | number
    warehouseId?: StringFilter<"Warehouse"> | string
  }

  export type ComponentUpsertWithWhereUniqueWithoutAdminInput = {
    where: ComponentWhereUniqueInput
    update: XOR<ComponentUpdateWithoutAdminInput, ComponentUncheckedUpdateWithoutAdminInput>
    create: XOR<ComponentCreateWithoutAdminInput, ComponentUncheckedCreateWithoutAdminInput>
  }

  export type ComponentUpdateWithWhereUniqueWithoutAdminInput = {
    where: ComponentWhereUniqueInput
    data: XOR<ComponentUpdateWithoutAdminInput, ComponentUncheckedUpdateWithoutAdminInput>
  }

  export type ComponentUpdateManyWithWhereWithoutAdminInput = {
    where: ComponentScalarWhereInput
    data: XOR<ComponentUpdateManyMutationInput, ComponentUncheckedUpdateManyWithoutAdminInput>
  }

  export type ComponentScalarWhereInput = {
    AND?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
    OR?: ComponentScalarWhereInput[]
    NOT?: ComponentScalarWhereInput | ComponentScalarWhereInput[]
    id?: IntFilter<"Component"> | number
    name?: StringFilter<"Component"> | string
    brand?: StringFilter<"Component"> | string
    modelNumber?: StringFilter<"Component"> | string
    serialNumber?: StringFilter<"Component"> | string
    collegeId?: IntFilter<"Component"> | number
    warehouseId?: IntFilter<"Component"> | number
    adminId?: IntFilter<"Component"> | number
    labId?: IntFilter<"Component"> | number
    createdAt?: DateTimeFilter<"Component"> | Date | string
    updatedAt?: DateTimeFilter<"Component"> | Date | string
    status?: EnumStatusFilter<"Component"> | $Enums.Status
    type?: EnumComponentTypeFilter<"Component"> | $Enums.ComponentType
  }

  export type HODUpsertWithWhereUniqueWithoutAdminInput = {
    where: HODWhereUniqueInput
    update: XOR<HODUpdateWithoutAdminInput, HODUncheckedUpdateWithoutAdminInput>
    create: XOR<HODCreateWithoutAdminInput, HODUncheckedCreateWithoutAdminInput>
  }

  export type HODUpdateWithWhereUniqueWithoutAdminInput = {
    where: HODWhereUniqueInput
    data: XOR<HODUpdateWithoutAdminInput, HODUncheckedUpdateWithoutAdminInput>
  }

  export type HODUpdateManyWithWhereWithoutAdminInput = {
    where: HODScalarWhereInput
    data: XOR<HODUpdateManyMutationInput, HODUncheckedUpdateManyWithoutAdminInput>
  }

  export type HODScalarWhereInput = {
    AND?: HODScalarWhereInput | HODScalarWhereInput[]
    OR?: HODScalarWhereInput[]
    NOT?: HODScalarWhereInput | HODScalarWhereInput[]
    id?: IntFilter<"HOD"> | number
    name?: StringFilter<"HOD"> | string
    email?: StringFilter<"HOD"> | string
    phone?: StringFilter<"HOD"> | string
    password?: StringFilter<"HOD"> | string
    collegeId?: IntFilter<"HOD"> | number
    adminId?: IntFilter<"HOD"> | number
    role?: EnumRoleFilter<"HOD"> | $Enums.Role
  }

  export type DepartmentUpsertWithWhereUniqueWithoutAdminInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutAdminInput, DepartmentUncheckedUpdateWithoutAdminInput>
    create: XOR<DepartmentCreateWithoutAdminInput, DepartmentUncheckedCreateWithoutAdminInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutAdminInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutAdminInput, DepartmentUncheckedUpdateWithoutAdminInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutAdminInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutAdminInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    id?: IntFilter<"Department"> | number
    name?: StringFilter<"Department"> | string
    departmentId?: StringFilter<"Department"> | string
    collegeId?: IntFilter<"Department"> | number
    adminId?: IntFilter<"Department"> | number
    hodId?: IntNullableFilter<"Department"> | number | null
  }

  export type LabUpsertWithWhereUniqueWithoutAdminInput = {
    where: LabWhereUniqueInput
    update: XOR<LabUpdateWithoutAdminInput, LabUncheckedUpdateWithoutAdminInput>
    create: XOR<LabCreateWithoutAdminInput, LabUncheckedCreateWithoutAdminInput>
  }

  export type LabUpdateWithWhereUniqueWithoutAdminInput = {
    where: LabWhereUniqueInput
    data: XOR<LabUpdateWithoutAdminInput, LabUncheckedUpdateWithoutAdminInput>
  }

  export type LabUpdateManyWithWhereWithoutAdminInput = {
    where: LabScalarWhereInput
    data: XOR<LabUpdateManyMutationInput, LabUncheckedUpdateManyWithoutAdminInput>
  }

  export type LabScalarWhereInput = {
    AND?: LabScalarWhereInput | LabScalarWhereInput[]
    OR?: LabScalarWhereInput[]
    NOT?: LabScalarWhereInput | LabScalarWhereInput[]
    id?: IntFilter<"Lab"> | number
    name?: StringFilter<"Lab"> | string
    departmentId?: IntFilter<"Lab"> | number
    adminId?: IntNullableFilter<"Lab"> | number | null
  }

  export type AdminCreateWithoutCollegesInput = {
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffs?: StaffCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseCreateNestedManyWithoutAdminInput
    component?: ComponentCreateNestedManyWithoutAdminInput
    HOD?: HODCreateNestedManyWithoutAdminInput
    Department?: DepartmentCreateNestedManyWithoutAdminInput
    Lab?: LabCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutCollegesInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffs?: StaffUncheckedCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutAdminInput
    component?: ComponentUncheckedCreateNestedManyWithoutAdminInput
    HOD?: HODUncheckedCreateNestedManyWithoutAdminInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutAdminInput
    Lab?: LabUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutCollegesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutCollegesInput, AdminUncheckedCreateWithoutCollegesInput>
  }

  export type StaffCreateWithoutCollegeInput = {
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    admin: AdminCreateNestedOneWithoutStaffsInput
    componentRequest?: ComponentRequestCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutCollegeInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    adminId: number
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    componentRequest?: ComponentRequestUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutCollegeInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutCollegeInput, StaffUncheckedCreateWithoutCollegeInput>
  }

  export type StaffCreateManyCollegeInputEnvelope = {
    data: StaffCreateManyCollegeInput | StaffCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseCreateWithoutCollegeInput = {
    name: string
    warehouseId: string
    admin: AdminCreateNestedOneWithoutWarehousesInput
    component?: ComponentCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseUncheckedCreateWithoutCollegeInput = {
    id?: number
    name: string
    adminId: number
    warehouseId: string
    component?: ComponentUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehouseCreateOrConnectWithoutCollegeInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutCollegeInput, WarehouseUncheckedCreateWithoutCollegeInput>
  }

  export type WarehouseCreateManyCollegeInputEnvelope = {
    data: WarehouseCreateManyCollegeInput | WarehouseCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type ComponentCreateWithoutCollegeInput = {
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    admin: AdminCreateNestedOneWithoutComponentInput
    warehouse: WarehouseCreateNestedOneWithoutComponentInput
    lab: LabCreateNestedOneWithoutComponentsInput
    Report?: ReportCreateNestedManyWithoutComponentInput
    Department?: DepartmentCreateNestedManyWithoutComponentsInput
  }

  export type ComponentUncheckedCreateWithoutCollegeInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    warehouseId: number
    adminId: number
    labId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    Report?: ReportUncheckedCreateNestedManyWithoutComponentInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutComponentsInput
  }

  export type ComponentCreateOrConnectWithoutCollegeInput = {
    where: ComponentWhereUniqueInput
    create: XOR<ComponentCreateWithoutCollegeInput, ComponentUncheckedCreateWithoutCollegeInput>
  }

  export type ComponentCreateManyCollegeInputEnvelope = {
    data: ComponentCreateManyCollegeInput | ComponentCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type HODCreateWithoutCollegeInput = {
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    admin: AdminCreateNestedOneWithoutHODInput
    departments?: DepartmentCreateNestedManyWithoutHodInput
    Report?: ReportCreateNestedManyWithoutHodInput
  }

  export type HODUncheckedCreateWithoutCollegeInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    adminId: number
    role?: $Enums.Role
    departments?: DepartmentUncheckedCreateNestedManyWithoutHodInput
    Report?: ReportUncheckedCreateNestedManyWithoutHodInput
  }

  export type HODCreateOrConnectWithoutCollegeInput = {
    where: HODWhereUniqueInput
    create: XOR<HODCreateWithoutCollegeInput, HODUncheckedCreateWithoutCollegeInput>
  }

  export type HODCreateManyCollegeInputEnvelope = {
    data: HODCreateManyCollegeInput | HODCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutCollegeInput = {
    name: string
    departmentId: string
    admin: AdminCreateNestedOneWithoutDepartmentInput
    hod?: HODCreateNestedOneWithoutDepartmentsInput
    Lab?: LabCreateNestedManyWithoutDepartmentInput
    components?: ComponentCreateNestedManyWithoutDepartmentInput
    Report?: ReportCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutCollegeInput = {
    id?: number
    name: string
    departmentId: string
    adminId: number
    hodId?: number | null
    Lab?: LabUncheckedCreateNestedManyWithoutDepartmentInput
    components?: ComponentUncheckedCreateNestedManyWithoutDepartmentInput
    Report?: ReportUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutCollegeInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutCollegeInput, DepartmentUncheckedCreateWithoutCollegeInput>
  }

  export type DepartmentCreateManyCollegeInputEnvelope = {
    data: DepartmentCreateManyCollegeInput | DepartmentCreateManyCollegeInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutCollegesInput = {
    update: XOR<AdminUpdateWithoutCollegesInput, AdminUncheckedUpdateWithoutCollegesInput>
    create: XOR<AdminCreateWithoutCollegesInput, AdminUncheckedCreateWithoutCollegesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutCollegesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutCollegesInput, AdminUncheckedUpdateWithoutCollegesInput>
  }

  export type AdminUpdateWithoutCollegesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffs?: StaffUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUpdateManyWithoutAdminNestedInput
    component?: ComponentUpdateManyWithoutAdminNestedInput
    HOD?: HODUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUpdateManyWithoutAdminNestedInput
    Lab?: LabUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutCollegesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffs?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutAdminNestedInput
    component?: ComponentUncheckedUpdateManyWithoutAdminNestedInput
    HOD?: HODUncheckedUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutAdminNestedInput
    Lab?: LabUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type StaffUpsertWithWhereUniqueWithoutCollegeInput = {
    where: StaffWhereUniqueInput
    update: XOR<StaffUpdateWithoutCollegeInput, StaffUncheckedUpdateWithoutCollegeInput>
    create: XOR<StaffCreateWithoutCollegeInput, StaffUncheckedCreateWithoutCollegeInput>
  }

  export type StaffUpdateWithWhereUniqueWithoutCollegeInput = {
    where: StaffWhereUniqueInput
    data: XOR<StaffUpdateWithoutCollegeInput, StaffUncheckedUpdateWithoutCollegeInput>
  }

  export type StaffUpdateManyWithWhereWithoutCollegeInput = {
    where: StaffScalarWhereInput
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyWithoutCollegeInput>
  }

  export type WarehouseUpsertWithWhereUniqueWithoutCollegeInput = {
    where: WarehouseWhereUniqueInput
    update: XOR<WarehouseUpdateWithoutCollegeInput, WarehouseUncheckedUpdateWithoutCollegeInput>
    create: XOR<WarehouseCreateWithoutCollegeInput, WarehouseUncheckedCreateWithoutCollegeInput>
  }

  export type WarehouseUpdateWithWhereUniqueWithoutCollegeInput = {
    where: WarehouseWhereUniqueInput
    data: XOR<WarehouseUpdateWithoutCollegeInput, WarehouseUncheckedUpdateWithoutCollegeInput>
  }

  export type WarehouseUpdateManyWithWhereWithoutCollegeInput = {
    where: WarehouseScalarWhereInput
    data: XOR<WarehouseUpdateManyMutationInput, WarehouseUncheckedUpdateManyWithoutCollegeInput>
  }

  export type ComponentUpsertWithWhereUniqueWithoutCollegeInput = {
    where: ComponentWhereUniqueInput
    update: XOR<ComponentUpdateWithoutCollegeInput, ComponentUncheckedUpdateWithoutCollegeInput>
    create: XOR<ComponentCreateWithoutCollegeInput, ComponentUncheckedCreateWithoutCollegeInput>
  }

  export type ComponentUpdateWithWhereUniqueWithoutCollegeInput = {
    where: ComponentWhereUniqueInput
    data: XOR<ComponentUpdateWithoutCollegeInput, ComponentUncheckedUpdateWithoutCollegeInput>
  }

  export type ComponentUpdateManyWithWhereWithoutCollegeInput = {
    where: ComponentScalarWhereInput
    data: XOR<ComponentUpdateManyMutationInput, ComponentUncheckedUpdateManyWithoutCollegeInput>
  }

  export type HODUpsertWithWhereUniqueWithoutCollegeInput = {
    where: HODWhereUniqueInput
    update: XOR<HODUpdateWithoutCollegeInput, HODUncheckedUpdateWithoutCollegeInput>
    create: XOR<HODCreateWithoutCollegeInput, HODUncheckedCreateWithoutCollegeInput>
  }

  export type HODUpdateWithWhereUniqueWithoutCollegeInput = {
    where: HODWhereUniqueInput
    data: XOR<HODUpdateWithoutCollegeInput, HODUncheckedUpdateWithoutCollegeInput>
  }

  export type HODUpdateManyWithWhereWithoutCollegeInput = {
    where: HODScalarWhereInput
    data: XOR<HODUpdateManyMutationInput, HODUncheckedUpdateManyWithoutCollegeInput>
  }

  export type DepartmentUpsertWithWhereUniqueWithoutCollegeInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutCollegeInput, DepartmentUncheckedUpdateWithoutCollegeInput>
    create: XOR<DepartmentCreateWithoutCollegeInput, DepartmentUncheckedCreateWithoutCollegeInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutCollegeInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutCollegeInput, DepartmentUncheckedUpdateWithoutCollegeInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutCollegeInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutCollegeInput>
  }

  export type AdminCreateWithoutWarehousesInput = {
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeCreateNestedManyWithoutAdminInput
    staffs?: StaffCreateNestedManyWithoutAdminInput
    component?: ComponentCreateNestedManyWithoutAdminInput
    HOD?: HODCreateNestedManyWithoutAdminInput
    Department?: DepartmentCreateNestedManyWithoutAdminInput
    Lab?: LabCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutWarehousesInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeUncheckedCreateNestedManyWithoutAdminInput
    staffs?: StaffUncheckedCreateNestedManyWithoutAdminInput
    component?: ComponentUncheckedCreateNestedManyWithoutAdminInput
    HOD?: HODUncheckedCreateNestedManyWithoutAdminInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutAdminInput
    Lab?: LabUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutWarehousesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutWarehousesInput, AdminUncheckedCreateWithoutWarehousesInput>
  }

  export type CollegeCreateWithoutWarehousesInput = {
    name: string
    address: string
    collegeId: string
    admin: AdminCreateNestedOneWithoutCollegesInput
    staffs?: StaffCreateNestedManyWithoutCollegeInput
    component?: ComponentCreateNestedManyWithoutCollegeInput
    hod?: HODCreateNestedManyWithoutCollegeInput
    Department?: DepartmentCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutWarehousesInput = {
    id?: number
    name: string
    address: string
    collegeId: string
    adminId: number
    staffs?: StaffUncheckedCreateNestedManyWithoutCollegeInput
    component?: ComponentUncheckedCreateNestedManyWithoutCollegeInput
    hod?: HODUncheckedCreateNestedManyWithoutCollegeInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutWarehousesInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutWarehousesInput, CollegeUncheckedCreateWithoutWarehousesInput>
  }

  export type ComponentCreateWithoutWarehouseInput = {
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    admin: AdminCreateNestedOneWithoutComponentInput
    college: CollegeCreateNestedOneWithoutComponentInput
    lab: LabCreateNestedOneWithoutComponentsInput
    Report?: ReportCreateNestedManyWithoutComponentInput
    Department?: DepartmentCreateNestedManyWithoutComponentsInput
  }

  export type ComponentUncheckedCreateWithoutWarehouseInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    collegeId: number
    adminId: number
    labId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    Report?: ReportUncheckedCreateNestedManyWithoutComponentInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutComponentsInput
  }

  export type ComponentCreateOrConnectWithoutWarehouseInput = {
    where: ComponentWhereUniqueInput
    create: XOR<ComponentCreateWithoutWarehouseInput, ComponentUncheckedCreateWithoutWarehouseInput>
  }

  export type ComponentCreateManyWarehouseInputEnvelope = {
    data: ComponentCreateManyWarehouseInput | ComponentCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutWarehousesInput = {
    update: XOR<AdminUpdateWithoutWarehousesInput, AdminUncheckedUpdateWithoutWarehousesInput>
    create: XOR<AdminCreateWithoutWarehousesInput, AdminUncheckedCreateWithoutWarehousesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutWarehousesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutWarehousesInput, AdminUncheckedUpdateWithoutWarehousesInput>
  }

  export type AdminUpdateWithoutWarehousesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUpdateManyWithoutAdminNestedInput
    staffs?: StaffUpdateManyWithoutAdminNestedInput
    component?: ComponentUpdateManyWithoutAdminNestedInput
    HOD?: HODUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUpdateManyWithoutAdminNestedInput
    Lab?: LabUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutWarehousesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUncheckedUpdateManyWithoutAdminNestedInput
    staffs?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    component?: ComponentUncheckedUpdateManyWithoutAdminNestedInput
    HOD?: HODUncheckedUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutAdminNestedInput
    Lab?: LabUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type CollegeUpsertWithoutWarehousesInput = {
    update: XOR<CollegeUpdateWithoutWarehousesInput, CollegeUncheckedUpdateWithoutWarehousesInput>
    create: XOR<CollegeCreateWithoutWarehousesInput, CollegeUncheckedCreateWithoutWarehousesInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutWarehousesInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutWarehousesInput, CollegeUncheckedUpdateWithoutWarehousesInput>
  }

  export type CollegeUpdateWithoutWarehousesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutCollegesNestedInput
    staffs?: StaffUpdateManyWithoutCollegeNestedInput
    component?: ComponentUpdateManyWithoutCollegeNestedInput
    hod?: HODUpdateManyWithoutCollegeNestedInput
    Department?: DepartmentUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutWarehousesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    staffs?: StaffUncheckedUpdateManyWithoutCollegeNestedInput
    component?: ComponentUncheckedUpdateManyWithoutCollegeNestedInput
    hod?: HODUncheckedUpdateManyWithoutCollegeNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type ComponentUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: ComponentWhereUniqueInput
    update: XOR<ComponentUpdateWithoutWarehouseInput, ComponentUncheckedUpdateWithoutWarehouseInput>
    create: XOR<ComponentCreateWithoutWarehouseInput, ComponentUncheckedCreateWithoutWarehouseInput>
  }

  export type ComponentUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: ComponentWhereUniqueInput
    data: XOR<ComponentUpdateWithoutWarehouseInput, ComponentUncheckedUpdateWithoutWarehouseInput>
  }

  export type ComponentUpdateManyWithWhereWithoutWarehouseInput = {
    where: ComponentScalarWhereInput
    data: XOR<ComponentUpdateManyMutationInput, ComponentUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type AdminCreateWithoutStaffsInput = {
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseCreateNestedManyWithoutAdminInput
    component?: ComponentCreateNestedManyWithoutAdminInput
    HOD?: HODCreateNestedManyWithoutAdminInput
    Department?: DepartmentCreateNestedManyWithoutAdminInput
    Lab?: LabCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutStaffsInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeUncheckedCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutAdminInput
    component?: ComponentUncheckedCreateNestedManyWithoutAdminInput
    HOD?: HODUncheckedCreateNestedManyWithoutAdminInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutAdminInput
    Lab?: LabUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutStaffsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutStaffsInput, AdminUncheckedCreateWithoutStaffsInput>
  }

  export type CollegeCreateWithoutStaffsInput = {
    name: string
    address: string
    collegeId: string
    admin: AdminCreateNestedOneWithoutCollegesInput
    warehouses?: WarehouseCreateNestedManyWithoutCollegeInput
    component?: ComponentCreateNestedManyWithoutCollegeInput
    hod?: HODCreateNestedManyWithoutCollegeInput
    Department?: DepartmentCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutStaffsInput = {
    id?: number
    name: string
    address: string
    collegeId: string
    adminId: number
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutCollegeInput
    component?: ComponentUncheckedCreateNestedManyWithoutCollegeInput
    hod?: HODUncheckedCreateNestedManyWithoutCollegeInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutStaffsInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutStaffsInput, CollegeUncheckedCreateWithoutStaffsInput>
  }

  export type ComponentRequestCreateWithoutStaffInput = {
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt?: Date | string
    type: string
    status: string
    createdByStaffId?: number | null
  }

  export type ComponentRequestUncheckedCreateWithoutStaffInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt?: Date | string
    type: string
    status: string
    createdByStaffId?: number | null
  }

  export type ComponentRequestCreateOrConnectWithoutStaffInput = {
    where: ComponentRequestWhereUniqueInput
    create: XOR<ComponentRequestCreateWithoutStaffInput, ComponentRequestUncheckedCreateWithoutStaffInput>
  }

  export type ComponentRequestCreateManyStaffInputEnvelope = {
    data: ComponentRequestCreateManyStaffInput | ComponentRequestCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutStaffsInput = {
    update: XOR<AdminUpdateWithoutStaffsInput, AdminUncheckedUpdateWithoutStaffsInput>
    create: XOR<AdminCreateWithoutStaffsInput, AdminUncheckedCreateWithoutStaffsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutStaffsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutStaffsInput, AdminUncheckedUpdateWithoutStaffsInput>
  }

  export type AdminUpdateWithoutStaffsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUpdateManyWithoutAdminNestedInput
    component?: ComponentUpdateManyWithoutAdminNestedInput
    HOD?: HODUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUpdateManyWithoutAdminNestedInput
    Lab?: LabUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutStaffsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUncheckedUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutAdminNestedInput
    component?: ComponentUncheckedUpdateManyWithoutAdminNestedInput
    HOD?: HODUncheckedUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutAdminNestedInput
    Lab?: LabUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type CollegeUpsertWithoutStaffsInput = {
    update: XOR<CollegeUpdateWithoutStaffsInput, CollegeUncheckedUpdateWithoutStaffsInput>
    create: XOR<CollegeCreateWithoutStaffsInput, CollegeUncheckedCreateWithoutStaffsInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutStaffsInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutStaffsInput, CollegeUncheckedUpdateWithoutStaffsInput>
  }

  export type CollegeUpdateWithoutStaffsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutCollegesNestedInput
    warehouses?: WarehouseUpdateManyWithoutCollegeNestedInput
    component?: ComponentUpdateManyWithoutCollegeNestedInput
    hod?: HODUpdateManyWithoutCollegeNestedInput
    Department?: DepartmentUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutStaffsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    warehouses?: WarehouseUncheckedUpdateManyWithoutCollegeNestedInput
    component?: ComponentUncheckedUpdateManyWithoutCollegeNestedInput
    hod?: HODUncheckedUpdateManyWithoutCollegeNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type ComponentRequestUpsertWithWhereUniqueWithoutStaffInput = {
    where: ComponentRequestWhereUniqueInput
    update: XOR<ComponentRequestUpdateWithoutStaffInput, ComponentRequestUncheckedUpdateWithoutStaffInput>
    create: XOR<ComponentRequestCreateWithoutStaffInput, ComponentRequestUncheckedCreateWithoutStaffInput>
  }

  export type ComponentRequestUpdateWithWhereUniqueWithoutStaffInput = {
    where: ComponentRequestWhereUniqueInput
    data: XOR<ComponentRequestUpdateWithoutStaffInput, ComponentRequestUncheckedUpdateWithoutStaffInput>
  }

  export type ComponentRequestUpdateManyWithWhereWithoutStaffInput = {
    where: ComponentRequestScalarWhereInput
    data: XOR<ComponentRequestUpdateManyMutationInput, ComponentRequestUncheckedUpdateManyWithoutStaffInput>
  }

  export type ComponentRequestScalarWhereInput = {
    AND?: ComponentRequestScalarWhereInput | ComponentRequestScalarWhereInput[]
    OR?: ComponentRequestScalarWhereInput[]
    NOT?: ComponentRequestScalarWhereInput | ComponentRequestScalarWhereInput[]
    id?: IntFilter<"ComponentRequest"> | number
    name?: StringFilter<"ComponentRequest"> | string
    brand?: StringFilter<"ComponentRequest"> | string
    modelNumber?: StringFilter<"ComponentRequest"> | string
    serialNumber?: StringFilter<"ComponentRequest"> | string
    createdAt?: DateTimeFilter<"ComponentRequest"> | Date | string
    staffId?: IntFilter<"ComponentRequest"> | number
    type?: StringFilter<"ComponentRequest"> | string
    status?: StringFilter<"ComponentRequest"> | string
    createdByStaffId?: IntNullableFilter<"ComponentRequest"> | number | null
  }

  export type StaffCreateWithoutComponentRequestInput = {
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    admin: AdminCreateNestedOneWithoutStaffsInput
    college: CollegeCreateNestedOneWithoutStaffsInput
  }

  export type StaffUncheckedCreateWithoutComponentRequestInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    collegeId: number
    adminId: number
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type StaffCreateOrConnectWithoutComponentRequestInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutComponentRequestInput, StaffUncheckedCreateWithoutComponentRequestInput>
  }

  export type StaffUpsertWithoutComponentRequestInput = {
    update: XOR<StaffUpdateWithoutComponentRequestInput, StaffUncheckedUpdateWithoutComponentRequestInput>
    create: XOR<StaffCreateWithoutComponentRequestInput, StaffUncheckedCreateWithoutComponentRequestInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutComponentRequestInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutComponentRequestInput, StaffUncheckedUpdateWithoutComponentRequestInput>
  }

  export type StaffUpdateWithoutComponentRequestInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneRequiredWithoutStaffsNestedInput
    college?: CollegeUpdateOneRequiredWithoutStaffsNestedInput
  }

  export type StaffUncheckedUpdateWithoutComponentRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminCreateWithoutHODInput = {
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeCreateNestedManyWithoutAdminInput
    staffs?: StaffCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseCreateNestedManyWithoutAdminInput
    component?: ComponentCreateNestedManyWithoutAdminInput
    Department?: DepartmentCreateNestedManyWithoutAdminInput
    Lab?: LabCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutHODInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeUncheckedCreateNestedManyWithoutAdminInput
    staffs?: StaffUncheckedCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutAdminInput
    component?: ComponentUncheckedCreateNestedManyWithoutAdminInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutAdminInput
    Lab?: LabUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutHODInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutHODInput, AdminUncheckedCreateWithoutHODInput>
  }

  export type CollegeCreateWithoutHodInput = {
    name: string
    address: string
    collegeId: string
    admin: AdminCreateNestedOneWithoutCollegesInput
    staffs?: StaffCreateNestedManyWithoutCollegeInput
    warehouses?: WarehouseCreateNestedManyWithoutCollegeInput
    component?: ComponentCreateNestedManyWithoutCollegeInput
    Department?: DepartmentCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutHodInput = {
    id?: number
    name: string
    address: string
    collegeId: string
    adminId: number
    staffs?: StaffUncheckedCreateNestedManyWithoutCollegeInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutCollegeInput
    component?: ComponentUncheckedCreateNestedManyWithoutCollegeInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutHodInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutHodInput, CollegeUncheckedCreateWithoutHodInput>
  }

  export type DepartmentCreateWithoutHodInput = {
    name: string
    departmentId: string
    admin: AdminCreateNestedOneWithoutDepartmentInput
    college: CollegeCreateNestedOneWithoutDepartmentInput
    Lab?: LabCreateNestedManyWithoutDepartmentInput
    components?: ComponentCreateNestedManyWithoutDepartmentInput
    Report?: ReportCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutHodInput = {
    id?: number
    name: string
    departmentId: string
    collegeId: number
    adminId: number
    Lab?: LabUncheckedCreateNestedManyWithoutDepartmentInput
    components?: ComponentUncheckedCreateNestedManyWithoutDepartmentInput
    Report?: ReportUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutHodInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutHodInput, DepartmentUncheckedCreateWithoutHodInput>
  }

  export type DepartmentCreateManyHodInputEnvelope = {
    data: DepartmentCreateManyHodInput | DepartmentCreateManyHodInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutHodInput = {
    status: $Enums.Status
    message: string
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutReportInput
    component: ComponentCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutHodInput = {
    id?: number
    componentId: number
    status: $Enums.Status
    message: string
    createdAt?: Date | string
    departmentId: number
  }

  export type ReportCreateOrConnectWithoutHodInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutHodInput, ReportUncheckedCreateWithoutHodInput>
  }

  export type ReportCreateManyHodInputEnvelope = {
    data: ReportCreateManyHodInput | ReportCreateManyHodInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutHODInput = {
    update: XOR<AdminUpdateWithoutHODInput, AdminUncheckedUpdateWithoutHODInput>
    create: XOR<AdminCreateWithoutHODInput, AdminUncheckedCreateWithoutHODInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutHODInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutHODInput, AdminUncheckedUpdateWithoutHODInput>
  }

  export type AdminUpdateWithoutHODInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUpdateManyWithoutAdminNestedInput
    staffs?: StaffUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUpdateManyWithoutAdminNestedInput
    component?: ComponentUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUpdateManyWithoutAdminNestedInput
    Lab?: LabUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutHODInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUncheckedUpdateManyWithoutAdminNestedInput
    staffs?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutAdminNestedInput
    component?: ComponentUncheckedUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutAdminNestedInput
    Lab?: LabUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type CollegeUpsertWithoutHodInput = {
    update: XOR<CollegeUpdateWithoutHodInput, CollegeUncheckedUpdateWithoutHodInput>
    create: XOR<CollegeCreateWithoutHodInput, CollegeUncheckedCreateWithoutHodInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutHodInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutHodInput, CollegeUncheckedUpdateWithoutHodInput>
  }

  export type CollegeUpdateWithoutHodInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutCollegesNestedInput
    staffs?: StaffUpdateManyWithoutCollegeNestedInput
    warehouses?: WarehouseUpdateManyWithoutCollegeNestedInput
    component?: ComponentUpdateManyWithoutCollegeNestedInput
    Department?: DepartmentUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutHodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    staffs?: StaffUncheckedUpdateManyWithoutCollegeNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutCollegeNestedInput
    component?: ComponentUncheckedUpdateManyWithoutCollegeNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type DepartmentUpsertWithWhereUniqueWithoutHodInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutHodInput, DepartmentUncheckedUpdateWithoutHodInput>
    create: XOR<DepartmentCreateWithoutHodInput, DepartmentUncheckedCreateWithoutHodInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutHodInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutHodInput, DepartmentUncheckedUpdateWithoutHodInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutHodInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutHodInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutHodInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutHodInput, ReportUncheckedUpdateWithoutHodInput>
    create: XOR<ReportCreateWithoutHodInput, ReportUncheckedCreateWithoutHodInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutHodInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutHodInput, ReportUncheckedUpdateWithoutHodInput>
  }

  export type ReportUpdateManyWithWhereWithoutHodInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutHodInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: IntFilter<"Report"> | number
    componentId?: IntFilter<"Report"> | number
    hodId?: IntFilter<"Report"> | number
    status?: EnumStatusFilter<"Report"> | $Enums.Status
    message?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    departmentId?: IntFilter<"Report"> | number
  }

  export type DepartmentCreateWithoutLabInput = {
    name: string
    departmentId: string
    admin: AdminCreateNestedOneWithoutDepartmentInput
    college: CollegeCreateNestedOneWithoutDepartmentInput
    hod?: HODCreateNestedOneWithoutDepartmentsInput
    components?: ComponentCreateNestedManyWithoutDepartmentInput
    Report?: ReportCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutLabInput = {
    id?: number
    name: string
    departmentId: string
    collegeId: number
    adminId: number
    hodId?: number | null
    components?: ComponentUncheckedCreateNestedManyWithoutDepartmentInput
    Report?: ReportUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutLabInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutLabInput, DepartmentUncheckedCreateWithoutLabInput>
  }

  export type AdminCreateWithoutLabInput = {
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeCreateNestedManyWithoutAdminInput
    staffs?: StaffCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseCreateNestedManyWithoutAdminInput
    component?: ComponentCreateNestedManyWithoutAdminInput
    HOD?: HODCreateNestedManyWithoutAdminInput
    Department?: DepartmentCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutLabInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeUncheckedCreateNestedManyWithoutAdminInput
    staffs?: StaffUncheckedCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutAdminInput
    component?: ComponentUncheckedCreateNestedManyWithoutAdminInput
    HOD?: HODUncheckedCreateNestedManyWithoutAdminInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutLabInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutLabInput, AdminUncheckedCreateWithoutLabInput>
  }

  export type ComponentCreateWithoutLabInput = {
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    admin: AdminCreateNestedOneWithoutComponentInput
    college: CollegeCreateNestedOneWithoutComponentInput
    warehouse: WarehouseCreateNestedOneWithoutComponentInput
    Report?: ReportCreateNestedManyWithoutComponentInput
    Department?: DepartmentCreateNestedManyWithoutComponentsInput
  }

  export type ComponentUncheckedCreateWithoutLabInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    collegeId: number
    warehouseId: number
    adminId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    Report?: ReportUncheckedCreateNestedManyWithoutComponentInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutComponentsInput
  }

  export type ComponentCreateOrConnectWithoutLabInput = {
    where: ComponentWhereUniqueInput
    create: XOR<ComponentCreateWithoutLabInput, ComponentUncheckedCreateWithoutLabInput>
  }

  export type ComponentCreateManyLabInputEnvelope = {
    data: ComponentCreateManyLabInput | ComponentCreateManyLabInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutLabInput = {
    update: XOR<DepartmentUpdateWithoutLabInput, DepartmentUncheckedUpdateWithoutLabInput>
    create: XOR<DepartmentCreateWithoutLabInput, DepartmentUncheckedCreateWithoutLabInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutLabInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutLabInput, DepartmentUncheckedUpdateWithoutLabInput>
  }

  export type DepartmentUpdateWithoutLabInput = {
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutDepartmentNestedInput
    college?: CollegeUpdateOneRequiredWithoutDepartmentNestedInput
    hod?: HODUpdateOneWithoutDepartmentsNestedInput
    components?: ComponentUpdateManyWithoutDepartmentNestedInput
    Report?: ReportUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutLabInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    hodId?: NullableIntFieldUpdateOperationsInput | number | null
    components?: ComponentUncheckedUpdateManyWithoutDepartmentNestedInput
    Report?: ReportUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type AdminUpsertWithoutLabInput = {
    update: XOR<AdminUpdateWithoutLabInput, AdminUncheckedUpdateWithoutLabInput>
    create: XOR<AdminCreateWithoutLabInput, AdminUncheckedCreateWithoutLabInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutLabInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutLabInput, AdminUncheckedUpdateWithoutLabInput>
  }

  export type AdminUpdateWithoutLabInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUpdateManyWithoutAdminNestedInput
    staffs?: StaffUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUpdateManyWithoutAdminNestedInput
    component?: ComponentUpdateManyWithoutAdminNestedInput
    HOD?: HODUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutLabInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUncheckedUpdateManyWithoutAdminNestedInput
    staffs?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutAdminNestedInput
    component?: ComponentUncheckedUpdateManyWithoutAdminNestedInput
    HOD?: HODUncheckedUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ComponentUpsertWithWhereUniqueWithoutLabInput = {
    where: ComponentWhereUniqueInput
    update: XOR<ComponentUpdateWithoutLabInput, ComponentUncheckedUpdateWithoutLabInput>
    create: XOR<ComponentCreateWithoutLabInput, ComponentUncheckedCreateWithoutLabInput>
  }

  export type ComponentUpdateWithWhereUniqueWithoutLabInput = {
    where: ComponentWhereUniqueInput
    data: XOR<ComponentUpdateWithoutLabInput, ComponentUncheckedUpdateWithoutLabInput>
  }

  export type ComponentUpdateManyWithWhereWithoutLabInput = {
    where: ComponentScalarWhereInput
    data: XOR<ComponentUpdateManyMutationInput, ComponentUncheckedUpdateManyWithoutLabInput>
  }

  export type AdminCreateWithoutComponentInput = {
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeCreateNestedManyWithoutAdminInput
    staffs?: StaffCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseCreateNestedManyWithoutAdminInput
    HOD?: HODCreateNestedManyWithoutAdminInput
    Department?: DepartmentCreateNestedManyWithoutAdminInput
    Lab?: LabCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutComponentInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeUncheckedCreateNestedManyWithoutAdminInput
    staffs?: StaffUncheckedCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutAdminInput
    HOD?: HODUncheckedCreateNestedManyWithoutAdminInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutAdminInput
    Lab?: LabUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutComponentInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutComponentInput, AdminUncheckedCreateWithoutComponentInput>
  }

  export type CollegeCreateWithoutComponentInput = {
    name: string
    address: string
    collegeId: string
    admin: AdminCreateNestedOneWithoutCollegesInput
    staffs?: StaffCreateNestedManyWithoutCollegeInput
    warehouses?: WarehouseCreateNestedManyWithoutCollegeInput
    hod?: HODCreateNestedManyWithoutCollegeInput
    Department?: DepartmentCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutComponentInput = {
    id?: number
    name: string
    address: string
    collegeId: string
    adminId: number
    staffs?: StaffUncheckedCreateNestedManyWithoutCollegeInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutCollegeInput
    hod?: HODUncheckedCreateNestedManyWithoutCollegeInput
    Department?: DepartmentUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutComponentInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutComponentInput, CollegeUncheckedCreateWithoutComponentInput>
  }

  export type WarehouseCreateWithoutComponentInput = {
    name: string
    warehouseId: string
    admin: AdminCreateNestedOneWithoutWarehousesInput
    college: CollegeCreateNestedOneWithoutWarehousesInput
  }

  export type WarehouseUncheckedCreateWithoutComponentInput = {
    id?: number
    name: string
    collegeId: number
    adminId: number
    warehouseId: string
  }

  export type WarehouseCreateOrConnectWithoutComponentInput = {
    where: WarehouseWhereUniqueInput
    create: XOR<WarehouseCreateWithoutComponentInput, WarehouseUncheckedCreateWithoutComponentInput>
  }

  export type LabCreateWithoutComponentsInput = {
    name: string
    department: DepartmentCreateNestedOneWithoutLabInput
    admin?: AdminCreateNestedOneWithoutLabInput
  }

  export type LabUncheckedCreateWithoutComponentsInput = {
    id?: number
    name: string
    departmentId: number
    adminId?: number | null
  }

  export type LabCreateOrConnectWithoutComponentsInput = {
    where: LabWhereUniqueInput
    create: XOR<LabCreateWithoutComponentsInput, LabUncheckedCreateWithoutComponentsInput>
  }

  export type ReportCreateWithoutComponentInput = {
    status: $Enums.Status
    message: string
    createdAt?: Date | string
    department: DepartmentCreateNestedOneWithoutReportInput
    hod: HODCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutComponentInput = {
    id?: number
    hodId: number
    status: $Enums.Status
    message: string
    createdAt?: Date | string
    departmentId: number
  }

  export type ReportCreateOrConnectWithoutComponentInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutComponentInput, ReportUncheckedCreateWithoutComponentInput>
  }

  export type ReportCreateManyComponentInputEnvelope = {
    data: ReportCreateManyComponentInput | ReportCreateManyComponentInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutComponentsInput = {
    name: string
    departmentId: string
    admin: AdminCreateNestedOneWithoutDepartmentInput
    college: CollegeCreateNestedOneWithoutDepartmentInput
    hod?: HODCreateNestedOneWithoutDepartmentsInput
    Lab?: LabCreateNestedManyWithoutDepartmentInput
    Report?: ReportCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutComponentsInput = {
    id?: number
    name: string
    departmentId: string
    collegeId: number
    adminId: number
    hodId?: number | null
    Lab?: LabUncheckedCreateNestedManyWithoutDepartmentInput
    Report?: ReportUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutComponentsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutComponentsInput, DepartmentUncheckedCreateWithoutComponentsInput>
  }

  export type AdminUpsertWithoutComponentInput = {
    update: XOR<AdminUpdateWithoutComponentInput, AdminUncheckedUpdateWithoutComponentInput>
    create: XOR<AdminCreateWithoutComponentInput, AdminUncheckedCreateWithoutComponentInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutComponentInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutComponentInput, AdminUncheckedUpdateWithoutComponentInput>
  }

  export type AdminUpdateWithoutComponentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUpdateManyWithoutAdminNestedInput
    staffs?: StaffUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUpdateManyWithoutAdminNestedInput
    HOD?: HODUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUpdateManyWithoutAdminNestedInput
    Lab?: LabUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutComponentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUncheckedUpdateManyWithoutAdminNestedInput
    staffs?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutAdminNestedInput
    HOD?: HODUncheckedUpdateManyWithoutAdminNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutAdminNestedInput
    Lab?: LabUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type CollegeUpsertWithoutComponentInput = {
    update: XOR<CollegeUpdateWithoutComponentInput, CollegeUncheckedUpdateWithoutComponentInput>
    create: XOR<CollegeCreateWithoutComponentInput, CollegeUncheckedCreateWithoutComponentInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutComponentInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutComponentInput, CollegeUncheckedUpdateWithoutComponentInput>
  }

  export type CollegeUpdateWithoutComponentInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutCollegesNestedInput
    staffs?: StaffUpdateManyWithoutCollegeNestedInput
    warehouses?: WarehouseUpdateManyWithoutCollegeNestedInput
    hod?: HODUpdateManyWithoutCollegeNestedInput
    Department?: DepartmentUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutComponentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    staffs?: StaffUncheckedUpdateManyWithoutCollegeNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutCollegeNestedInput
    hod?: HODUncheckedUpdateManyWithoutCollegeNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type WarehouseUpsertWithoutComponentInput = {
    update: XOR<WarehouseUpdateWithoutComponentInput, WarehouseUncheckedUpdateWithoutComponentInput>
    create: XOR<WarehouseCreateWithoutComponentInput, WarehouseUncheckedCreateWithoutComponentInput>
    where?: WarehouseWhereInput
  }

  export type WarehouseUpdateToOneWithWhereWithoutComponentInput = {
    where?: WarehouseWhereInput
    data: XOR<WarehouseUpdateWithoutComponentInput, WarehouseUncheckedUpdateWithoutComponentInput>
  }

  export type WarehouseUpdateWithoutComponentInput = {
    name?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutWarehousesNestedInput
    college?: CollegeUpdateOneRequiredWithoutWarehousesNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutComponentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    warehouseId?: StringFieldUpdateOperationsInput | string
  }

  export type LabUpsertWithoutComponentsInput = {
    update: XOR<LabUpdateWithoutComponentsInput, LabUncheckedUpdateWithoutComponentsInput>
    create: XOR<LabCreateWithoutComponentsInput, LabUncheckedCreateWithoutComponentsInput>
    where?: LabWhereInput
  }

  export type LabUpdateToOneWithWhereWithoutComponentsInput = {
    where?: LabWhereInput
    data: XOR<LabUpdateWithoutComponentsInput, LabUncheckedUpdateWithoutComponentsInput>
  }

  export type LabUpdateWithoutComponentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutLabNestedInput
    admin?: AdminUpdateOneWithoutLabNestedInput
  }

  export type LabUncheckedUpdateWithoutComponentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: IntFieldUpdateOperationsInput | number
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReportUpsertWithWhereUniqueWithoutComponentInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutComponentInput, ReportUncheckedUpdateWithoutComponentInput>
    create: XOR<ReportCreateWithoutComponentInput, ReportUncheckedCreateWithoutComponentInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutComponentInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutComponentInput, ReportUncheckedUpdateWithoutComponentInput>
  }

  export type ReportUpdateManyWithWhereWithoutComponentInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutComponentInput>
  }

  export type DepartmentUpsertWithWhereUniqueWithoutComponentsInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutComponentsInput, DepartmentUncheckedUpdateWithoutComponentsInput>
    create: XOR<DepartmentCreateWithoutComponentsInput, DepartmentUncheckedCreateWithoutComponentsInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutComponentsInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutComponentsInput, DepartmentUncheckedUpdateWithoutComponentsInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutComponentsInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutComponentsInput>
  }

  export type AdminCreateWithoutDepartmentInput = {
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeCreateNestedManyWithoutAdminInput
    staffs?: StaffCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseCreateNestedManyWithoutAdminInput
    component?: ComponentCreateNestedManyWithoutAdminInput
    HOD?: HODCreateNestedManyWithoutAdminInput
    Lab?: LabCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutDepartmentInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    colleges?: CollegeUncheckedCreateNestedManyWithoutAdminInput
    staffs?: StaffUncheckedCreateNestedManyWithoutAdminInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutAdminInput
    component?: ComponentUncheckedCreateNestedManyWithoutAdminInput
    HOD?: HODUncheckedCreateNestedManyWithoutAdminInput
    Lab?: LabUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutDepartmentInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutDepartmentInput, AdminUncheckedCreateWithoutDepartmentInput>
  }

  export type CollegeCreateWithoutDepartmentInput = {
    name: string
    address: string
    collegeId: string
    admin: AdminCreateNestedOneWithoutCollegesInput
    staffs?: StaffCreateNestedManyWithoutCollegeInput
    warehouses?: WarehouseCreateNestedManyWithoutCollegeInput
    component?: ComponentCreateNestedManyWithoutCollegeInput
    hod?: HODCreateNestedManyWithoutCollegeInput
  }

  export type CollegeUncheckedCreateWithoutDepartmentInput = {
    id?: number
    name: string
    address: string
    collegeId: string
    adminId: number
    staffs?: StaffUncheckedCreateNestedManyWithoutCollegeInput
    warehouses?: WarehouseUncheckedCreateNestedManyWithoutCollegeInput
    component?: ComponentUncheckedCreateNestedManyWithoutCollegeInput
    hod?: HODUncheckedCreateNestedManyWithoutCollegeInput
  }

  export type CollegeCreateOrConnectWithoutDepartmentInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutDepartmentInput, CollegeUncheckedCreateWithoutDepartmentInput>
  }

  export type HODCreateWithoutDepartmentsInput = {
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    admin: AdminCreateNestedOneWithoutHODInput
    college: CollegeCreateNestedOneWithoutHodInput
    Report?: ReportCreateNestedManyWithoutHodInput
  }

  export type HODUncheckedCreateWithoutDepartmentsInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    collegeId: number
    adminId: number
    role?: $Enums.Role
    Report?: ReportUncheckedCreateNestedManyWithoutHodInput
  }

  export type HODCreateOrConnectWithoutDepartmentsInput = {
    where: HODWhereUniqueInput
    create: XOR<HODCreateWithoutDepartmentsInput, HODUncheckedCreateWithoutDepartmentsInput>
  }

  export type LabCreateWithoutDepartmentInput = {
    name: string
    admin?: AdminCreateNestedOneWithoutLabInput
    components?: ComponentCreateNestedManyWithoutLabInput
  }

  export type LabUncheckedCreateWithoutDepartmentInput = {
    id?: number
    name: string
    adminId?: number | null
    components?: ComponentUncheckedCreateNestedManyWithoutLabInput
  }

  export type LabCreateOrConnectWithoutDepartmentInput = {
    where: LabWhereUniqueInput
    create: XOR<LabCreateWithoutDepartmentInput, LabUncheckedCreateWithoutDepartmentInput>
  }

  export type LabCreateManyDepartmentInputEnvelope = {
    data: LabCreateManyDepartmentInput | LabCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type ComponentCreateWithoutDepartmentInput = {
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    admin: AdminCreateNestedOneWithoutComponentInput
    college: CollegeCreateNestedOneWithoutComponentInput
    warehouse: WarehouseCreateNestedOneWithoutComponentInput
    lab: LabCreateNestedOneWithoutComponentsInput
    Report?: ReportCreateNestedManyWithoutComponentInput
  }

  export type ComponentUncheckedCreateWithoutDepartmentInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    collegeId: number
    warehouseId: number
    adminId: number
    labId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    Report?: ReportUncheckedCreateNestedManyWithoutComponentInput
  }

  export type ComponentCreateOrConnectWithoutDepartmentInput = {
    where: ComponentWhereUniqueInput
    create: XOR<ComponentCreateWithoutDepartmentInput, ComponentUncheckedCreateWithoutDepartmentInput>
  }

  export type ReportCreateWithoutDepartmentInput = {
    status: $Enums.Status
    message: string
    createdAt?: Date | string
    component: ComponentCreateNestedOneWithoutReportInput
    hod: HODCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutDepartmentInput = {
    id?: number
    componentId: number
    hodId: number
    status: $Enums.Status
    message: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutDepartmentInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutDepartmentInput, ReportUncheckedCreateWithoutDepartmentInput>
  }

  export type ReportCreateManyDepartmentInputEnvelope = {
    data: ReportCreateManyDepartmentInput | ReportCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutDepartmentInput = {
    update: XOR<AdminUpdateWithoutDepartmentInput, AdminUncheckedUpdateWithoutDepartmentInput>
    create: XOR<AdminCreateWithoutDepartmentInput, AdminUncheckedCreateWithoutDepartmentInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutDepartmentInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutDepartmentInput, AdminUncheckedUpdateWithoutDepartmentInput>
  }

  export type AdminUpdateWithoutDepartmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUpdateManyWithoutAdminNestedInput
    staffs?: StaffUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUpdateManyWithoutAdminNestedInput
    component?: ComponentUpdateManyWithoutAdminNestedInput
    HOD?: HODUpdateManyWithoutAdminNestedInput
    Lab?: LabUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    colleges?: CollegeUncheckedUpdateManyWithoutAdminNestedInput
    staffs?: StaffUncheckedUpdateManyWithoutAdminNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutAdminNestedInput
    component?: ComponentUncheckedUpdateManyWithoutAdminNestedInput
    HOD?: HODUncheckedUpdateManyWithoutAdminNestedInput
    Lab?: LabUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type CollegeUpsertWithoutDepartmentInput = {
    update: XOR<CollegeUpdateWithoutDepartmentInput, CollegeUncheckedUpdateWithoutDepartmentInput>
    create: XOR<CollegeCreateWithoutDepartmentInput, CollegeUncheckedCreateWithoutDepartmentInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutDepartmentInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutDepartmentInput, CollegeUncheckedUpdateWithoutDepartmentInput>
  }

  export type CollegeUpdateWithoutDepartmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutCollegesNestedInput
    staffs?: StaffUpdateManyWithoutCollegeNestedInput
    warehouses?: WarehouseUpdateManyWithoutCollegeNestedInput
    component?: ComponentUpdateManyWithoutCollegeNestedInput
    hod?: HODUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    staffs?: StaffUncheckedUpdateManyWithoutCollegeNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutCollegeNestedInput
    component?: ComponentUncheckedUpdateManyWithoutCollegeNestedInput
    hod?: HODUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type HODUpsertWithoutDepartmentsInput = {
    update: XOR<HODUpdateWithoutDepartmentsInput, HODUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<HODCreateWithoutDepartmentsInput, HODUncheckedCreateWithoutDepartmentsInput>
    where?: HODWhereInput
  }

  export type HODUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: HODWhereInput
    data: XOR<HODUpdateWithoutDepartmentsInput, HODUncheckedUpdateWithoutDepartmentsInput>
  }

  export type HODUpdateWithoutDepartmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    admin?: AdminUpdateOneRequiredWithoutHODNestedInput
    college?: CollegeUpdateOneRequiredWithoutHodNestedInput
    Report?: ReportUpdateManyWithoutHodNestedInput
  }

  export type HODUncheckedUpdateWithoutDepartmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Report?: ReportUncheckedUpdateManyWithoutHodNestedInput
  }

  export type LabUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: LabWhereUniqueInput
    update: XOR<LabUpdateWithoutDepartmentInput, LabUncheckedUpdateWithoutDepartmentInput>
    create: XOR<LabCreateWithoutDepartmentInput, LabUncheckedCreateWithoutDepartmentInput>
  }

  export type LabUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: LabWhereUniqueInput
    data: XOR<LabUpdateWithoutDepartmentInput, LabUncheckedUpdateWithoutDepartmentInput>
  }

  export type LabUpdateManyWithWhereWithoutDepartmentInput = {
    where: LabScalarWhereInput
    data: XOR<LabUpdateManyMutationInput, LabUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type ComponentUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: ComponentWhereUniqueInput
    update: XOR<ComponentUpdateWithoutDepartmentInput, ComponentUncheckedUpdateWithoutDepartmentInput>
    create: XOR<ComponentCreateWithoutDepartmentInput, ComponentUncheckedCreateWithoutDepartmentInput>
  }

  export type ComponentUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: ComponentWhereUniqueInput
    data: XOR<ComponentUpdateWithoutDepartmentInput, ComponentUncheckedUpdateWithoutDepartmentInput>
  }

  export type ComponentUpdateManyWithWhereWithoutDepartmentInput = {
    where: ComponentScalarWhereInput
    data: XOR<ComponentUpdateManyMutationInput, ComponentUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutDepartmentInput, ReportUncheckedUpdateWithoutDepartmentInput>
    create: XOR<ReportCreateWithoutDepartmentInput, ReportUncheckedCreateWithoutDepartmentInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutDepartmentInput, ReportUncheckedUpdateWithoutDepartmentInput>
  }

  export type ReportUpdateManyWithWhereWithoutDepartmentInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type DepartmentCreateWithoutReportInput = {
    name: string
    departmentId: string
    admin: AdminCreateNestedOneWithoutDepartmentInput
    college: CollegeCreateNestedOneWithoutDepartmentInput
    hod?: HODCreateNestedOneWithoutDepartmentsInput
    Lab?: LabCreateNestedManyWithoutDepartmentInput
    components?: ComponentCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutReportInput = {
    id?: number
    name: string
    departmentId: string
    collegeId: number
    adminId: number
    hodId?: number | null
    Lab?: LabUncheckedCreateNestedManyWithoutDepartmentInput
    components?: ComponentUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutReportInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutReportInput, DepartmentUncheckedCreateWithoutReportInput>
  }

  export type ComponentCreateWithoutReportInput = {
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    admin: AdminCreateNestedOneWithoutComponentInput
    college: CollegeCreateNestedOneWithoutComponentInput
    warehouse: WarehouseCreateNestedOneWithoutComponentInput
    lab: LabCreateNestedOneWithoutComponentsInput
    Department?: DepartmentCreateNestedManyWithoutComponentsInput
  }

  export type ComponentUncheckedCreateWithoutReportInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    collegeId: number
    warehouseId: number
    adminId: number
    labId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
    Department?: DepartmentUncheckedCreateNestedManyWithoutComponentsInput
  }

  export type ComponentCreateOrConnectWithoutReportInput = {
    where: ComponentWhereUniqueInput
    create: XOR<ComponentCreateWithoutReportInput, ComponentUncheckedCreateWithoutReportInput>
  }

  export type HODCreateWithoutReportInput = {
    name: string
    email: string
    phone: string
    password: string
    role?: $Enums.Role
    admin: AdminCreateNestedOneWithoutHODInput
    college: CollegeCreateNestedOneWithoutHodInput
    departments?: DepartmentCreateNestedManyWithoutHodInput
  }

  export type HODUncheckedCreateWithoutReportInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    collegeId: number
    adminId: number
    role?: $Enums.Role
    departments?: DepartmentUncheckedCreateNestedManyWithoutHodInput
  }

  export type HODCreateOrConnectWithoutReportInput = {
    where: HODWhereUniqueInput
    create: XOR<HODCreateWithoutReportInput, HODUncheckedCreateWithoutReportInput>
  }

  export type DepartmentUpsertWithoutReportInput = {
    update: XOR<DepartmentUpdateWithoutReportInput, DepartmentUncheckedUpdateWithoutReportInput>
    create: XOR<DepartmentCreateWithoutReportInput, DepartmentUncheckedCreateWithoutReportInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutReportInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutReportInput, DepartmentUncheckedUpdateWithoutReportInput>
  }

  export type DepartmentUpdateWithoutReportInput = {
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutDepartmentNestedInput
    college?: CollegeUpdateOneRequiredWithoutDepartmentNestedInput
    hod?: HODUpdateOneWithoutDepartmentsNestedInput
    Lab?: LabUpdateManyWithoutDepartmentNestedInput
    components?: ComponentUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    hodId?: NullableIntFieldUpdateOperationsInput | number | null
    Lab?: LabUncheckedUpdateManyWithoutDepartmentNestedInput
    components?: ComponentUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type ComponentUpsertWithoutReportInput = {
    update: XOR<ComponentUpdateWithoutReportInput, ComponentUncheckedUpdateWithoutReportInput>
    create: XOR<ComponentCreateWithoutReportInput, ComponentUncheckedCreateWithoutReportInput>
    where?: ComponentWhereInput
  }

  export type ComponentUpdateToOneWithWhereWithoutReportInput = {
    where?: ComponentWhereInput
    data: XOR<ComponentUpdateWithoutReportInput, ComponentUncheckedUpdateWithoutReportInput>
  }

  export type ComponentUpdateWithoutReportInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    admin?: AdminUpdateOneRequiredWithoutComponentNestedInput
    college?: CollegeUpdateOneRequiredWithoutComponentNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutComponentNestedInput
    lab?: LabUpdateOneRequiredWithoutComponentsNestedInput
    Department?: DepartmentUpdateManyWithoutComponentsNestedInput
  }

  export type ComponentUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    labId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    Department?: DepartmentUncheckedUpdateManyWithoutComponentsNestedInput
  }

  export type HODUpsertWithoutReportInput = {
    update: XOR<HODUpdateWithoutReportInput, HODUncheckedUpdateWithoutReportInput>
    create: XOR<HODCreateWithoutReportInput, HODUncheckedCreateWithoutReportInput>
    where?: HODWhereInput
  }

  export type HODUpdateToOneWithWhereWithoutReportInput = {
    where?: HODWhereInput
    data: XOR<HODUpdateWithoutReportInput, HODUncheckedUpdateWithoutReportInput>
  }

  export type HODUpdateWithoutReportInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    admin?: AdminUpdateOneRequiredWithoutHODNestedInput
    college?: CollegeUpdateOneRequiredWithoutHodNestedInput
    departments?: DepartmentUpdateManyWithoutHodNestedInput
  }

  export type HODUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departments?: DepartmentUncheckedUpdateManyWithoutHodNestedInput
  }

  export type CollegeCreateManyAdminInput = {
    id?: number
    name: string
    address: string
    collegeId: string
  }

  export type StaffCreateManyAdminInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    collegeId: number
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type WarehouseCreateManyAdminInput = {
    id?: number
    name: string
    collegeId: number
    warehouseId: string
  }

  export type ComponentCreateManyAdminInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    collegeId: number
    warehouseId: number
    labId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
  }

  export type HODCreateManyAdminInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    collegeId: number
    role?: $Enums.Role
  }

  export type DepartmentCreateManyAdminInput = {
    id?: number
    name: string
    departmentId: string
    collegeId: number
    hodId?: number | null
  }

  export type LabCreateManyAdminInput = {
    id?: number
    name: string
    departmentId: number
  }

  export type CollegeUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    staffs?: StaffUpdateManyWithoutCollegeNestedInput
    warehouses?: WarehouseUpdateManyWithoutCollegeNestedInput
    component?: ComponentUpdateManyWithoutCollegeNestedInput
    hod?: HODUpdateManyWithoutCollegeNestedInput
    Department?: DepartmentUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    staffs?: StaffUncheckedUpdateManyWithoutCollegeNestedInput
    warehouses?: WarehouseUncheckedUpdateManyWithoutCollegeNestedInput
    component?: ComponentUncheckedUpdateManyWithoutCollegeNestedInput
    hod?: HODUncheckedUpdateManyWithoutCollegeNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutCollegeNestedInput
  }

  export type CollegeUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
  }

  export type StaffUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    college?: CollegeUpdateOneRequiredWithoutStaffsNestedInput
    componentRequest?: ComponentRequestUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    componentRequest?: ComponentRequestUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WarehouseUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    college?: CollegeUpdateOneRequiredWithoutWarehousesNestedInput
    component?: ComponentUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    warehouseId?: StringFieldUpdateOperationsInput | string
    component?: ComponentUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    warehouseId?: StringFieldUpdateOperationsInput | string
  }

  export type ComponentUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    college?: CollegeUpdateOneRequiredWithoutComponentNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutComponentNestedInput
    lab?: LabUpdateOneRequiredWithoutComponentsNestedInput
    Report?: ReportUpdateManyWithoutComponentNestedInput
    Department?: DepartmentUpdateManyWithoutComponentsNestedInput
  }

  export type ComponentUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    labId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    Report?: ReportUncheckedUpdateManyWithoutComponentNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutComponentsNestedInput
  }

  export type ComponentUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    labId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
  }

  export type HODUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    college?: CollegeUpdateOneRequiredWithoutHodNestedInput
    departments?: DepartmentUpdateManyWithoutHodNestedInput
    Report?: ReportUpdateManyWithoutHodNestedInput
  }

  export type HODUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departments?: DepartmentUncheckedUpdateManyWithoutHodNestedInput
    Report?: ReportUncheckedUpdateManyWithoutHodNestedInput
  }

  export type HODUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type DepartmentUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    college?: CollegeUpdateOneRequiredWithoutDepartmentNestedInput
    hod?: HODUpdateOneWithoutDepartmentsNestedInput
    Lab?: LabUpdateManyWithoutDepartmentNestedInput
    components?: ComponentUpdateManyWithoutDepartmentNestedInput
    Report?: ReportUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    hodId?: NullableIntFieldUpdateOperationsInput | number | null
    Lab?: LabUncheckedUpdateManyWithoutDepartmentNestedInput
    components?: ComponentUncheckedUpdateManyWithoutDepartmentNestedInput
    Report?: ReportUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    hodId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LabUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutLabNestedInput
    components?: ComponentUpdateManyWithoutLabNestedInput
  }

  export type LabUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: IntFieldUpdateOperationsInput | number
    components?: ComponentUncheckedUpdateManyWithoutLabNestedInput
  }

  export type LabUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: IntFieldUpdateOperationsInput | number
  }

  export type StaffCreateManyCollegeInput = {
    id?: number
    name: string
    email: string
    password: string
    phone: string
    adminId: number
    role?: $Enums.Role
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type WarehouseCreateManyCollegeInput = {
    id?: number
    name: string
    adminId: number
    warehouseId: string
  }

  export type ComponentCreateManyCollegeInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    warehouseId: number
    adminId: number
    labId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
  }

  export type HODCreateManyCollegeInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    adminId: number
    role?: $Enums.Role
  }

  export type DepartmentCreateManyCollegeInput = {
    id?: number
    name: string
    departmentId: string
    adminId: number
    hodId?: number | null
  }

  export type StaffUpdateWithoutCollegeInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneRequiredWithoutStaffsNestedInput
    componentRequest?: ComponentRequestUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    componentRequest?: ComponentRequestUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateManyWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WarehouseUpdateWithoutCollegeInput = {
    name?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutWarehousesNestedInput
    component?: ComponentUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    warehouseId?: StringFieldUpdateOperationsInput | string
    component?: ComponentUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehouseUncheckedUpdateManyWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    warehouseId?: StringFieldUpdateOperationsInput | string
  }

  export type ComponentUpdateWithoutCollegeInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    admin?: AdminUpdateOneRequiredWithoutComponentNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutComponentNestedInput
    lab?: LabUpdateOneRequiredWithoutComponentsNestedInput
    Report?: ReportUpdateManyWithoutComponentNestedInput
    Department?: DepartmentUpdateManyWithoutComponentsNestedInput
  }

  export type ComponentUncheckedUpdateWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    warehouseId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    labId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    Report?: ReportUncheckedUpdateManyWithoutComponentNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutComponentsNestedInput
  }

  export type ComponentUncheckedUpdateManyWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    warehouseId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    labId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
  }

  export type HODUpdateWithoutCollegeInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    admin?: AdminUpdateOneRequiredWithoutHODNestedInput
    departments?: DepartmentUpdateManyWithoutHodNestedInput
    Report?: ReportUpdateManyWithoutHodNestedInput
  }

  export type HODUncheckedUpdateWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    departments?: DepartmentUncheckedUpdateManyWithoutHodNestedInput
    Report?: ReportUncheckedUpdateManyWithoutHodNestedInput
  }

  export type HODUncheckedUpdateManyWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type DepartmentUpdateWithoutCollegeInput = {
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutDepartmentNestedInput
    hod?: HODUpdateOneWithoutDepartmentsNestedInput
    Lab?: LabUpdateManyWithoutDepartmentNestedInput
    components?: ComponentUpdateManyWithoutDepartmentNestedInput
    Report?: ReportUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    hodId?: NullableIntFieldUpdateOperationsInput | number | null
    Lab?: LabUncheckedUpdateManyWithoutDepartmentNestedInput
    components?: ComponentUncheckedUpdateManyWithoutDepartmentNestedInput
    Report?: ReportUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutCollegeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    adminId?: IntFieldUpdateOperationsInput | number
    hodId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ComponentCreateManyWarehouseInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    collegeId: number
    adminId: number
    labId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
  }

  export type ComponentUpdateWithoutWarehouseInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    admin?: AdminUpdateOneRequiredWithoutComponentNestedInput
    college?: CollegeUpdateOneRequiredWithoutComponentNestedInput
    lab?: LabUpdateOneRequiredWithoutComponentsNestedInput
    Report?: ReportUpdateManyWithoutComponentNestedInput
    Department?: DepartmentUpdateManyWithoutComponentsNestedInput
  }

  export type ComponentUncheckedUpdateWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    labId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    Report?: ReportUncheckedUpdateManyWithoutComponentNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutComponentsNestedInput
  }

  export type ComponentUncheckedUpdateManyWithoutWarehouseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    labId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
  }

  export type ComponentRequestCreateManyStaffInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    createdAt?: Date | string
    type: string
    status: string
    createdByStaffId?: number | null
  }

  export type ComponentRequestUpdateWithoutStaffInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ComponentRequestUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ComponentRequestUncheckedUpdateManyWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdByStaffId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DepartmentCreateManyHodInput = {
    id?: number
    name: string
    departmentId: string
    collegeId: number
    adminId: number
  }

  export type ReportCreateManyHodInput = {
    id?: number
    componentId: number
    status: $Enums.Status
    message: string
    createdAt?: Date | string
    departmentId: number
  }

  export type DepartmentUpdateWithoutHodInput = {
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutDepartmentNestedInput
    college?: CollegeUpdateOneRequiredWithoutDepartmentNestedInput
    Lab?: LabUpdateManyWithoutDepartmentNestedInput
    components?: ComponentUpdateManyWithoutDepartmentNestedInput
    Report?: ReportUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutHodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    Lab?: LabUncheckedUpdateManyWithoutDepartmentNestedInput
    components?: ComponentUncheckedUpdateManyWithoutDepartmentNestedInput
    Report?: ReportUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutHodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUpdateWithoutHodInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutReportNestedInput
    component?: ComponentUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutHodInput = {
    id?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUncheckedUpdateManyWithoutHodInput = {
    id?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: IntFieldUpdateOperationsInput | number
  }

  export type ComponentCreateManyLabInput = {
    id?: number
    name: string
    brand: string
    modelNumber: string
    serialNumber: string
    collegeId: number
    warehouseId: number
    adminId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    type: $Enums.ComponentType
  }

  export type ComponentUpdateWithoutLabInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    admin?: AdminUpdateOneRequiredWithoutComponentNestedInput
    college?: CollegeUpdateOneRequiredWithoutComponentNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutComponentNestedInput
    Report?: ReportUpdateManyWithoutComponentNestedInput
    Department?: DepartmentUpdateManyWithoutComponentsNestedInput
  }

  export type ComponentUncheckedUpdateWithoutLabInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    Report?: ReportUncheckedUpdateManyWithoutComponentNestedInput
    Department?: DepartmentUncheckedUpdateManyWithoutComponentsNestedInput
  }

  export type ComponentUncheckedUpdateManyWithoutLabInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
  }

  export type ReportCreateManyComponentInput = {
    id?: number
    hodId: number
    status: $Enums.Status
    message: string
    createdAt?: Date | string
    departmentId: number
  }

  export type ReportUpdateWithoutComponentInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutReportNestedInput
    hod?: HODUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutComponentInput = {
    id?: IntFieldUpdateOperationsInput | number
    hodId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUncheckedUpdateManyWithoutComponentInput = {
    id?: IntFieldUpdateOperationsInput | number
    hodId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departmentId?: IntFieldUpdateOperationsInput | number
  }

  export type DepartmentUpdateWithoutComponentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneRequiredWithoutDepartmentNestedInput
    college?: CollegeUpdateOneRequiredWithoutDepartmentNestedInput
    hod?: HODUpdateOneWithoutDepartmentsNestedInput
    Lab?: LabUpdateManyWithoutDepartmentNestedInput
    Report?: ReportUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutComponentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    hodId?: NullableIntFieldUpdateOperationsInput | number | null
    Lab?: LabUncheckedUpdateManyWithoutDepartmentNestedInput
    Report?: ReportUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutComponentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    departmentId?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    hodId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LabCreateManyDepartmentInput = {
    id?: number
    name: string
    adminId?: number | null
  }

  export type ReportCreateManyDepartmentInput = {
    id?: number
    componentId: number
    hodId: number
    status: $Enums.Status
    message: string
    createdAt?: Date | string
  }

  export type LabUpdateWithoutDepartmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    admin?: AdminUpdateOneWithoutLabNestedInput
    components?: ComponentUpdateManyWithoutLabNestedInput
  }

  export type LabUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    components?: ComponentUncheckedUpdateManyWithoutLabNestedInput
  }

  export type LabUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ComponentUpdateWithoutDepartmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    admin?: AdminUpdateOneRequiredWithoutComponentNestedInput
    college?: CollegeUpdateOneRequiredWithoutComponentNestedInput
    warehouse?: WarehouseUpdateOneRequiredWithoutComponentNestedInput
    lab?: LabUpdateOneRequiredWithoutComponentsNestedInput
    Report?: ReportUpdateManyWithoutComponentNestedInput
  }

  export type ComponentUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    labId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
    Report?: ReportUncheckedUpdateManyWithoutComponentNestedInput
  }

  export type ComponentUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    modelNumber?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    collegeId?: IntFieldUpdateOperationsInput | number
    warehouseId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    labId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    type?: EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType
  }

  export type ReportUpdateWithoutDepartmentInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    component?: ComponentUpdateOneRequiredWithoutReportNestedInput
    hod?: HODUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    hodId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    componentId?: IntFieldUpdateOperationsInput | number
    hodId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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