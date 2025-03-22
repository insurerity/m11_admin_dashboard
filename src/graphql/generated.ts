import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "listing" */
export type Listing = {
  __typename?: 'listing';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  images: Array<Listing_Image>;
  /** An aggregate relationship */
  images_aggregate: Listing_Image_Aggregate;
  inquire_now_mail_to: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
  no_of_bathrooms: Scalars['numeric']['output'];
  no_of_beds: Scalars['numeric']['output'];
  no_of_guests: Scalars['numeric']['output'];
  price: Scalars['numeric']['output'];
  rating: Scalars['numeric']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "listing" */
export type ListingImagesArgs = {
  distinct_on?: InputMaybe<Array<Listing_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Listing_Image_Order_By>>;
  where?: InputMaybe<Listing_Image_Bool_Exp>;
};


/** columns and relationships of "listing" */
export type ListingImages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Listing_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Listing_Image_Order_By>>;
  where?: InputMaybe<Listing_Image_Bool_Exp>;
};

/** aggregated selection of "listing" */
export type Listing_Aggregate = {
  __typename?: 'listing_aggregate';
  aggregate?: Maybe<Listing_Aggregate_Fields>;
  nodes: Array<Listing>;
};

/** aggregate fields of "listing" */
export type Listing_Aggregate_Fields = {
  __typename?: 'listing_aggregate_fields';
  avg?: Maybe<Listing_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Listing_Max_Fields>;
  min?: Maybe<Listing_Min_Fields>;
  stddev?: Maybe<Listing_Stddev_Fields>;
  stddev_pop?: Maybe<Listing_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Listing_Stddev_Samp_Fields>;
  sum?: Maybe<Listing_Sum_Fields>;
  var_pop?: Maybe<Listing_Var_Pop_Fields>;
  var_samp?: Maybe<Listing_Var_Samp_Fields>;
  variance?: Maybe<Listing_Variance_Fields>;
};


/** aggregate fields of "listing" */
export type Listing_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Listing_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Listing_Avg_Fields = {
  __typename?: 'listing_avg_fields';
  no_of_bathrooms?: Maybe<Scalars['Float']['output']>;
  no_of_beds?: Maybe<Scalars['Float']['output']>;
  no_of_guests?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "listing". All fields are combined with a logical 'AND'. */
export type Listing_Bool_Exp = {
  _and?: InputMaybe<Array<Listing_Bool_Exp>>;
  _not?: InputMaybe<Listing_Bool_Exp>;
  _or?: InputMaybe<Array<Listing_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  images?: InputMaybe<Listing_Image_Bool_Exp>;
  images_aggregate?: InputMaybe<Listing_Image_Aggregate_Bool_Exp>;
  inquire_now_mail_to?: InputMaybe<String_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  no_of_bathrooms?: InputMaybe<Numeric_Comparison_Exp>;
  no_of_beds?: InputMaybe<Numeric_Comparison_Exp>;
  no_of_guests?: InputMaybe<Numeric_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  rating?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "listing" */
export enum Listing_Constraint {
  /** unique or primary key constraint on columns "id" */
  ListingPkey = 'listing_pkey'
}

/** columns and relationships of "listing_image" */
export type Listing_Image = {
  __typename?: 'listing_image';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  listing_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  url: Scalars['String']['output'];
};

/** aggregated selection of "listing_image" */
export type Listing_Image_Aggregate = {
  __typename?: 'listing_image_aggregate';
  aggregate?: Maybe<Listing_Image_Aggregate_Fields>;
  nodes: Array<Listing_Image>;
};

export type Listing_Image_Aggregate_Bool_Exp = {
  count?: InputMaybe<Listing_Image_Aggregate_Bool_Exp_Count>;
};

export type Listing_Image_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Listing_Image_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Listing_Image_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "listing_image" */
export type Listing_Image_Aggregate_Fields = {
  __typename?: 'listing_image_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Listing_Image_Max_Fields>;
  min?: Maybe<Listing_Image_Min_Fields>;
};


/** aggregate fields of "listing_image" */
export type Listing_Image_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Listing_Image_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "listing_image" */
export type Listing_Image_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Listing_Image_Max_Order_By>;
  min?: InputMaybe<Listing_Image_Min_Order_By>;
};

/** input type for inserting array relation for remote table "listing_image" */
export type Listing_Image_Arr_Rel_Insert_Input = {
  data: Array<Listing_Image_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Listing_Image_On_Conflict>;
};

/** Boolean expression to filter rows from the table "listing_image". All fields are combined with a logical 'AND'. */
export type Listing_Image_Bool_Exp = {
  _and?: InputMaybe<Array<Listing_Image_Bool_Exp>>;
  _not?: InputMaybe<Listing_Image_Bool_Exp>;
  _or?: InputMaybe<Array<Listing_Image_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  listing_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "listing_image" */
export enum Listing_Image_Constraint {
  /** unique or primary key constraint on columns "id" */
  ListingImagePkey = 'listing_image_pkey'
}

/** input type for inserting data into table "listing_image" */
export type Listing_Image_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  listing_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Listing_Image_Max_Fields = {
  __typename?: 'listing_image_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  listing_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "listing_image" */
export type Listing_Image_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Listing_Image_Min_Fields = {
  __typename?: 'listing_image_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  listing_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "listing_image" */
export type Listing_Image_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "listing_image" */
export type Listing_Image_Mutation_Response = {
  __typename?: 'listing_image_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Listing_Image>;
};

/** on_conflict condition type for table "listing_image" */
export type Listing_Image_On_Conflict = {
  constraint: Listing_Image_Constraint;
  update_columns?: Array<Listing_Image_Update_Column>;
  where?: InputMaybe<Listing_Image_Bool_Exp>;
};

/** Ordering options when selecting data from "listing_image". */
export type Listing_Image_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: listing_image */
export type Listing_Image_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "listing_image" */
export enum Listing_Image_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ListingId = 'listing_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "listing_image" */
export type Listing_Image_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  listing_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "listing_image" */
export type Listing_Image_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Listing_Image_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Listing_Image_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  listing_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "listing_image" */
export enum Listing_Image_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ListingId = 'listing_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

export type Listing_Image_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Listing_Image_Set_Input>;
  /** filter the rows which have to be updated */
  where: Listing_Image_Bool_Exp;
};

/** input type for incrementing numeric columns in table "listing" */
export type Listing_Inc_Input = {
  no_of_bathrooms?: InputMaybe<Scalars['numeric']['input']>;
  no_of_beds?: InputMaybe<Scalars['numeric']['input']>;
  no_of_guests?: InputMaybe<Scalars['numeric']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "listing" */
export type Listing_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  images?: InputMaybe<Listing_Image_Arr_Rel_Insert_Input>;
  inquire_now_mail_to?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  no_of_bathrooms?: InputMaybe<Scalars['numeric']['input']>;
  no_of_beds?: InputMaybe<Scalars['numeric']['input']>;
  no_of_guests?: InputMaybe<Scalars['numeric']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Listing_Max_Fields = {
  __typename?: 'listing_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  inquire_now_mail_to?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  no_of_bathrooms?: Maybe<Scalars['numeric']['output']>;
  no_of_beds?: Maybe<Scalars['numeric']['output']>;
  no_of_guests?: Maybe<Scalars['numeric']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Listing_Min_Fields = {
  __typename?: 'listing_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  inquire_now_mail_to?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  no_of_bathrooms?: Maybe<Scalars['numeric']['output']>;
  no_of_beds?: Maybe<Scalars['numeric']['output']>;
  no_of_guests?: Maybe<Scalars['numeric']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "listing" */
export type Listing_Mutation_Response = {
  __typename?: 'listing_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Listing>;
};

/** on_conflict condition type for table "listing" */
export type Listing_On_Conflict = {
  constraint: Listing_Constraint;
  update_columns?: Array<Listing_Update_Column>;
  where?: InputMaybe<Listing_Bool_Exp>;
};

/** Ordering options when selecting data from "listing". */
export type Listing_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  images_aggregate?: InputMaybe<Listing_Image_Aggregate_Order_By>;
  inquire_now_mail_to?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  no_of_bathrooms?: InputMaybe<Order_By>;
  no_of_beds?: InputMaybe<Order_By>;
  no_of_guests?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: listing */
export type Listing_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "listing" */
export enum Listing_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InquireNowMailTo = 'inquire_now_mail_to',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  NoOfBathrooms = 'no_of_bathrooms',
  /** column name */
  NoOfBeds = 'no_of_beds',
  /** column name */
  NoOfGuests = 'no_of_guests',
  /** column name */
  Price = 'price',
  /** column name */
  Rating = 'rating',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "listing" */
export type Listing_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inquire_now_mail_to?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  no_of_bathrooms?: InputMaybe<Scalars['numeric']['input']>;
  no_of_beds?: InputMaybe<Scalars['numeric']['input']>;
  no_of_guests?: InputMaybe<Scalars['numeric']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Listing_Stddev_Fields = {
  __typename?: 'listing_stddev_fields';
  no_of_bathrooms?: Maybe<Scalars['Float']['output']>;
  no_of_beds?: Maybe<Scalars['Float']['output']>;
  no_of_guests?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Listing_Stddev_Pop_Fields = {
  __typename?: 'listing_stddev_pop_fields';
  no_of_bathrooms?: Maybe<Scalars['Float']['output']>;
  no_of_beds?: Maybe<Scalars['Float']['output']>;
  no_of_guests?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Listing_Stddev_Samp_Fields = {
  __typename?: 'listing_stddev_samp_fields';
  no_of_bathrooms?: Maybe<Scalars['Float']['output']>;
  no_of_beds?: Maybe<Scalars['Float']['output']>;
  no_of_guests?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "listing" */
export type Listing_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Listing_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Listing_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inquire_now_mail_to?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  no_of_bathrooms?: InputMaybe<Scalars['numeric']['input']>;
  no_of_beds?: InputMaybe<Scalars['numeric']['input']>;
  no_of_guests?: InputMaybe<Scalars['numeric']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Listing_Sum_Fields = {
  __typename?: 'listing_sum_fields';
  no_of_bathrooms?: Maybe<Scalars['numeric']['output']>;
  no_of_beds?: Maybe<Scalars['numeric']['output']>;
  no_of_guests?: Maybe<Scalars['numeric']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "listing" */
export enum Listing_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InquireNowMailTo = 'inquire_now_mail_to',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  NoOfBathrooms = 'no_of_bathrooms',
  /** column name */
  NoOfBeds = 'no_of_beds',
  /** column name */
  NoOfGuests = 'no_of_guests',
  /** column name */
  Price = 'price',
  /** column name */
  Rating = 'rating',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Listing_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Listing_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Listing_Set_Input>;
  /** filter the rows which have to be updated */
  where: Listing_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Listing_Var_Pop_Fields = {
  __typename?: 'listing_var_pop_fields';
  no_of_bathrooms?: Maybe<Scalars['Float']['output']>;
  no_of_beds?: Maybe<Scalars['Float']['output']>;
  no_of_guests?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Listing_Var_Samp_Fields = {
  __typename?: 'listing_var_samp_fields';
  no_of_bathrooms?: Maybe<Scalars['Float']['output']>;
  no_of_beds?: Maybe<Scalars['Float']['output']>;
  no_of_guests?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Listing_Variance_Fields = {
  __typename?: 'listing_variance_fields';
  no_of_bathrooms?: Maybe<Scalars['Float']['output']>;
  no_of_beds?: Maybe<Scalars['Float']['output']>;
  no_of_guests?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "listing" */
  delete_listing?: Maybe<Listing_Mutation_Response>;
  /** delete single row from the table: "listing" */
  delete_listing_by_pk?: Maybe<Listing>;
  /** delete data from the table: "listing_image" */
  delete_listing_image?: Maybe<Listing_Image_Mutation_Response>;
  /** delete single row from the table: "listing_image" */
  delete_listing_image_by_pk?: Maybe<Listing_Image>;
  /** insert data into the table: "listing" */
  insert_listing?: Maybe<Listing_Mutation_Response>;
  /** insert data into the table: "listing_image" */
  insert_listing_image?: Maybe<Listing_Image_Mutation_Response>;
  /** insert a single row into the table: "listing_image" */
  insert_listing_image_one?: Maybe<Listing_Image>;
  /** insert a single row into the table: "listing" */
  insert_listing_one?: Maybe<Listing>;
  /** update data of the table: "listing" */
  update_listing?: Maybe<Listing_Mutation_Response>;
  /** update single row of the table: "listing" */
  update_listing_by_pk?: Maybe<Listing>;
  /** update data of the table: "listing_image" */
  update_listing_image?: Maybe<Listing_Image_Mutation_Response>;
  /** update single row of the table: "listing_image" */
  update_listing_image_by_pk?: Maybe<Listing_Image>;
  /** update multiples rows of table: "listing_image" */
  update_listing_image_many?: Maybe<Array<Maybe<Listing_Image_Mutation_Response>>>;
  /** update multiples rows of table: "listing" */
  update_listing_many?: Maybe<Array<Maybe<Listing_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ListingArgs = {
  where: Listing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Listing_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Listing_ImageArgs = {
  where: Listing_Image_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Listing_Image_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_ListingArgs = {
  objects: Array<Listing_Insert_Input>;
  on_conflict?: InputMaybe<Listing_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Listing_ImageArgs = {
  objects: Array<Listing_Image_Insert_Input>;
  on_conflict?: InputMaybe<Listing_Image_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Listing_Image_OneArgs = {
  object: Listing_Image_Insert_Input;
  on_conflict?: InputMaybe<Listing_Image_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Listing_OneArgs = {
  object: Listing_Insert_Input;
  on_conflict?: InputMaybe<Listing_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ListingArgs = {
  _inc?: InputMaybe<Listing_Inc_Input>;
  _set?: InputMaybe<Listing_Set_Input>;
  where: Listing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Listing_By_PkArgs = {
  _inc?: InputMaybe<Listing_Inc_Input>;
  _set?: InputMaybe<Listing_Set_Input>;
  pk_columns: Listing_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Listing_ImageArgs = {
  _set?: InputMaybe<Listing_Image_Set_Input>;
  where: Listing_Image_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Listing_Image_By_PkArgs = {
  _set?: InputMaybe<Listing_Image_Set_Input>;
  pk_columns: Listing_Image_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Listing_Image_ManyArgs = {
  updates: Array<Listing_Image_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Listing_ManyArgs = {
  updates: Array<Listing_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "listing" */
  listing: Array<Listing>;
  /** fetch aggregated fields from the table: "listing" */
  listing_aggregate: Listing_Aggregate;
  /** fetch data from the table: "listing" using primary key columns */
  listing_by_pk?: Maybe<Listing>;
  /** fetch data from the table: "listing_image" */
  listing_image: Array<Listing_Image>;
  /** fetch aggregated fields from the table: "listing_image" */
  listing_image_aggregate: Listing_Image_Aggregate;
  /** fetch data from the table: "listing_image" using primary key columns */
  listing_image_by_pk?: Maybe<Listing_Image>;
};


export type Query_RootListingArgs = {
  distinct_on?: InputMaybe<Array<Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Listing_Order_By>>;
  where?: InputMaybe<Listing_Bool_Exp>;
};


export type Query_RootListing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Listing_Order_By>>;
  where?: InputMaybe<Listing_Bool_Exp>;
};


export type Query_RootListing_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootListing_ImageArgs = {
  distinct_on?: InputMaybe<Array<Listing_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Listing_Image_Order_By>>;
  where?: InputMaybe<Listing_Image_Bool_Exp>;
};


export type Query_RootListing_Image_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Listing_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Listing_Image_Order_By>>;
  where?: InputMaybe<Listing_Image_Bool_Exp>;
};


export type Query_RootListing_Image_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "listing" */
  listing: Array<Listing>;
  /** fetch aggregated fields from the table: "listing" */
  listing_aggregate: Listing_Aggregate;
  /** fetch data from the table: "listing" using primary key columns */
  listing_by_pk?: Maybe<Listing>;
  /** fetch data from the table: "listing_image" */
  listing_image: Array<Listing_Image>;
  /** fetch aggregated fields from the table: "listing_image" */
  listing_image_aggregate: Listing_Image_Aggregate;
  /** fetch data from the table: "listing_image" using primary key columns */
  listing_image_by_pk?: Maybe<Listing_Image>;
  /** fetch data from the table in a streaming manner: "listing_image" */
  listing_image_stream: Array<Listing_Image>;
  /** fetch data from the table in a streaming manner: "listing" */
  listing_stream: Array<Listing>;
};


export type Subscription_RootListingArgs = {
  distinct_on?: InputMaybe<Array<Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Listing_Order_By>>;
  where?: InputMaybe<Listing_Bool_Exp>;
};


export type Subscription_RootListing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Listing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Listing_Order_By>>;
  where?: InputMaybe<Listing_Bool_Exp>;
};


export type Subscription_RootListing_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootListing_ImageArgs = {
  distinct_on?: InputMaybe<Array<Listing_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Listing_Image_Order_By>>;
  where?: InputMaybe<Listing_Image_Bool_Exp>;
};


export type Subscription_RootListing_Image_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Listing_Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Listing_Image_Order_By>>;
  where?: InputMaybe<Listing_Image_Bool_Exp>;
};


export type Subscription_RootListing_Image_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootListing_Image_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Listing_Image_Stream_Cursor_Input>>;
  where?: InputMaybe<Listing_Image_Bool_Exp>;
};


export type Subscription_RootListing_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Listing_Stream_Cursor_Input>>;
  where?: InputMaybe<Listing_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'query_root', listing: Array<{ __typename?: 'listing', price: any, rating: any, title: string, no_of_beds: any, no_of_bathrooms: any, nickname: string }> };


export const MyQueryDocument = gql`
    query MyQuery {
  listing {
    price
    rating
    title
    no_of_beds
    no_of_bathrooms
    nickname
  }
}
    `;

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(baseOptions?: Apollo.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, options);
      }
export function useMyQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, options);
        }
export function useMyQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, options);
        }
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQuerySuspenseQueryHookResult = ReturnType<typeof useMyQuerySuspenseQuery>;
export type MyQueryQueryResult = Apollo.QueryResult<MyQueryQuery, MyQueryQueryVariables>;
export function refetchMyQueryQuery(variables?: MyQueryQueryVariables) {
      return { query: MyQueryDocument, variables: variables }
    }