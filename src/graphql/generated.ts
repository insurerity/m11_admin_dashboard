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
  date: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
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

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "listing" */
export type Listing = {
  __typename?: 'listing';
  access?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  house_rules?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  /** An array relationship */
  images: Array<Listing_Image>;
  /** An aggregate relationship */
  images_aggregate: Listing_Image_Aggregate;
  inquire_now_mail_to: Scalars['String']['output'];
  interaction_with_guests?: Maybe<Scalars['String']['output']>;
  isProd: Scalars['Boolean']['output'];
  neighborhood?: Maybe<Scalars['String']['output']>;
  nickname: Scalars['String']['output'];
  no_of_bathrooms: Scalars['numeric']['output'];
  no_of_beds: Scalars['numeric']['output'];
  no_of_guests: Scalars['numeric']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  price: Scalars['numeric']['output'];
  rating: Scalars['numeric']['output'];
  space?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['jsonb']['output']>;
  title: Scalars['String']['output'];
  transit?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  video?: Maybe<Scalars['String']['output']>;
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


/** columns and relationships of "listing" */
export type ListingTagsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type Listing_Append_Input = {
  tags?: InputMaybe<Scalars['jsonb']['input']>;
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
  access?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  house_rules?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  images?: InputMaybe<Listing_Image_Bool_Exp>;
  images_aggregate?: InputMaybe<Listing_Image_Aggregate_Bool_Exp>;
  inquire_now_mail_to?: InputMaybe<String_Comparison_Exp>;
  interaction_with_guests?: InputMaybe<String_Comparison_Exp>;
  isProd?: InputMaybe<Boolean_Comparison_Exp>;
  neighborhood?: InputMaybe<String_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  no_of_bathrooms?: InputMaybe<Numeric_Comparison_Exp>;
  no_of_beds?: InputMaybe<Numeric_Comparison_Exp>;
  no_of_guests?: InputMaybe<Numeric_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  rating?: InputMaybe<Numeric_Comparison_Exp>;
  space?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  summary?: InputMaybe<String_Comparison_Exp>;
  tags?: InputMaybe<Jsonb_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  transit?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  video?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "listing" */
export enum Listing_Constraint {
  /** unique or primary key constraint on columns "id" */
  ListingPkey = 'listing_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Listing_Delete_At_Path_Input = {
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Listing_Delete_Elem_Input = {
  tags?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Listing_Delete_Key_Input = {
  tags?: InputMaybe<Scalars['String']['input']>;
};

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
  access?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  house_rules?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  images?: InputMaybe<Listing_Image_Arr_Rel_Insert_Input>;
  inquire_now_mail_to?: InputMaybe<Scalars['String']['input']>;
  interaction_with_guests?: InputMaybe<Scalars['String']['input']>;
  isProd?: InputMaybe<Scalars['Boolean']['input']>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  no_of_bathrooms?: InputMaybe<Scalars['numeric']['input']>;
  no_of_beds?: InputMaybe<Scalars['numeric']['input']>;
  no_of_guests?: InputMaybe<Scalars['numeric']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  space?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transit?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Listing_Max_Fields = {
  __typename?: 'listing_max_fields';
  access?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  house_rules?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  inquire_now_mail_to?: Maybe<Scalars['String']['output']>;
  interaction_with_guests?: Maybe<Scalars['String']['output']>;
  neighborhood?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  no_of_bathrooms?: Maybe<Scalars['numeric']['output']>;
  no_of_beds?: Maybe<Scalars['numeric']['output']>;
  no_of_guests?: Maybe<Scalars['numeric']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  space?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  transit?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  video?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Listing_Min_Fields = {
  __typename?: 'listing_min_fields';
  access?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  house_rules?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  inquire_now_mail_to?: Maybe<Scalars['String']['output']>;
  interaction_with_guests?: Maybe<Scalars['String']['output']>;
  neighborhood?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  no_of_bathrooms?: Maybe<Scalars['numeric']['output']>;
  no_of_beds?: Maybe<Scalars['numeric']['output']>;
  no_of_guests?: Maybe<Scalars['numeric']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  space?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  transit?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  video?: Maybe<Scalars['String']['output']>;
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
  access?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  house_rules?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  images_aggregate?: InputMaybe<Listing_Image_Aggregate_Order_By>;
  inquire_now_mail_to?: InputMaybe<Order_By>;
  interaction_with_guests?: InputMaybe<Order_By>;
  isProd?: InputMaybe<Order_By>;
  neighborhood?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  no_of_bathrooms?: InputMaybe<Order_By>;
  no_of_beds?: InputMaybe<Order_By>;
  no_of_guests?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  space?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  transit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  video?: InputMaybe<Order_By>;
};

/** primary key columns input for table: listing */
export type Listing_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Listing_Prepend_Input = {
  tags?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "listing" */
export enum Listing_Select_Column {
  /** column name */
  Access = 'access',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  HouseRules = 'house_rules',
  /** column name */
  Id = 'id',
  /** column name */
  InquireNowMailTo = 'inquire_now_mail_to',
  /** column name */
  InteractionWithGuests = 'interaction_with_guests',
  /** column name */
  IsProd = 'isProd',
  /** column name */
  Neighborhood = 'neighborhood',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  NoOfBathrooms = 'no_of_bathrooms',
  /** column name */
  NoOfBeds = 'no_of_beds',
  /** column name */
  NoOfGuests = 'no_of_guests',
  /** column name */
  Notes = 'notes',
  /** column name */
  Price = 'price',
  /** column name */
  Rating = 'rating',
  /** column name */
  Space = 'space',
  /** column name */
  State = 'state',
  /** column name */
  Summary = 'summary',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  Transit = 'transit',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Video = 'video'
}

/** input type for updating data in table "listing" */
export type Listing_Set_Input = {
  access?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  house_rules?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inquire_now_mail_to?: InputMaybe<Scalars['String']['input']>;
  interaction_with_guests?: InputMaybe<Scalars['String']['input']>;
  isProd?: InputMaybe<Scalars['Boolean']['input']>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  no_of_bathrooms?: InputMaybe<Scalars['numeric']['input']>;
  no_of_beds?: InputMaybe<Scalars['numeric']['input']>;
  no_of_guests?: InputMaybe<Scalars['numeric']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  space?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transit?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
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
  access?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  house_rules?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inquire_now_mail_to?: InputMaybe<Scalars['String']['input']>;
  interaction_with_guests?: InputMaybe<Scalars['String']['input']>;
  isProd?: InputMaybe<Scalars['Boolean']['input']>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  no_of_bathrooms?: InputMaybe<Scalars['numeric']['input']>;
  no_of_beds?: InputMaybe<Scalars['numeric']['input']>;
  no_of_guests?: InputMaybe<Scalars['numeric']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  space?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  transit?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
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
  Access = 'access',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Currency = 'currency',
  /** column name */
  HouseRules = 'house_rules',
  /** column name */
  Id = 'id',
  /** column name */
  InquireNowMailTo = 'inquire_now_mail_to',
  /** column name */
  InteractionWithGuests = 'interaction_with_guests',
  /** column name */
  IsProd = 'isProd',
  /** column name */
  Neighborhood = 'neighborhood',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  NoOfBathrooms = 'no_of_bathrooms',
  /** column name */
  NoOfBeds = 'no_of_beds',
  /** column name */
  NoOfGuests = 'no_of_guests',
  /** column name */
  Notes = 'notes',
  /** column name */
  Price = 'price',
  /** column name */
  Rating = 'rating',
  /** column name */
  Space = 'space',
  /** column name */
  State = 'state',
  /** column name */
  Summary = 'summary',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  Transit = 'transit',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Video = 'video'
}

export type Listing_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Listing_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Listing_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Listing_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Listing_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Listing_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Listing_Prepend_Input>;
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

/** columns and relationships of "log" */
export type Log = {
  __typename?: 'log';
  check_in_date?: Maybe<Scalars['date']['output']>;
  check_out_date?: Maybe<Scalars['date']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  listing_id?: Maybe<Scalars['String']['output']>;
  min_occupancy?: Maybe<Scalars['numeric']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "log" */
export type Log_Aggregate = {
  __typename?: 'log_aggregate';
  aggregate?: Maybe<Log_Aggregate_Fields>;
  nodes: Array<Log>;
};

/** aggregate fields of "log" */
export type Log_Aggregate_Fields = {
  __typename?: 'log_aggregate_fields';
  avg?: Maybe<Log_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Log_Max_Fields>;
  min?: Maybe<Log_Min_Fields>;
  stddev?: Maybe<Log_Stddev_Fields>;
  stddev_pop?: Maybe<Log_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Log_Stddev_Samp_Fields>;
  sum?: Maybe<Log_Sum_Fields>;
  var_pop?: Maybe<Log_Var_Pop_Fields>;
  var_samp?: Maybe<Log_Var_Samp_Fields>;
  variance?: Maybe<Log_Variance_Fields>;
};


/** aggregate fields of "log" */
export type Log_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Log_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Log_Avg_Fields = {
  __typename?: 'log_avg_fields';
  min_occupancy?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "log". All fields are combined with a logical 'AND'. */
export type Log_Bool_Exp = {
  _and?: InputMaybe<Array<Log_Bool_Exp>>;
  _not?: InputMaybe<Log_Bool_Exp>;
  _or?: InputMaybe<Array<Log_Bool_Exp>>;
  check_in_date?: InputMaybe<Date_Comparison_Exp>;
  check_out_date?: InputMaybe<Date_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  listing_id?: InputMaybe<String_Comparison_Exp>;
  min_occupancy?: InputMaybe<Numeric_Comparison_Exp>;
  tags?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "log" */
export enum Log_Constraint {
  /** unique or primary key constraint on columns "id" */
  LogPkey = 'log_pkey'
}

/** input type for incrementing numeric columns in table "log" */
export type Log_Inc_Input = {
  min_occupancy?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "log" */
export type Log_Insert_Input = {
  check_in_date?: InputMaybe<Scalars['date']['input']>;
  check_out_date?: InputMaybe<Scalars['date']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  listing_id?: InputMaybe<Scalars['String']['input']>;
  min_occupancy?: InputMaybe<Scalars['numeric']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Log_Max_Fields = {
  __typename?: 'log_max_fields';
  check_in_date?: Maybe<Scalars['date']['output']>;
  check_out_date?: Maybe<Scalars['date']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  listing_id?: Maybe<Scalars['String']['output']>;
  min_occupancy?: Maybe<Scalars['numeric']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Log_Min_Fields = {
  __typename?: 'log_min_fields';
  check_in_date?: Maybe<Scalars['date']['output']>;
  check_out_date?: Maybe<Scalars['date']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  listing_id?: Maybe<Scalars['String']['output']>;
  min_occupancy?: Maybe<Scalars['numeric']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "log" */
export type Log_Mutation_Response = {
  __typename?: 'log_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Log>;
};

/** on_conflict condition type for table "log" */
export type Log_On_Conflict = {
  constraint: Log_Constraint;
  update_columns?: Array<Log_Update_Column>;
  where?: InputMaybe<Log_Bool_Exp>;
};

/** Ordering options when selecting data from "log". */
export type Log_Order_By = {
  check_in_date?: InputMaybe<Order_By>;
  check_out_date?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  min_occupancy?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: log */
export type Log_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "log" */
export enum Log_Select_Column {
  /** column name */
  CheckInDate = 'check_in_date',
  /** column name */
  CheckOutDate = 'check_out_date',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ListingId = 'listing_id',
  /** column name */
  MinOccupancy = 'min_occupancy',
  /** column name */
  Tags = 'tags',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "log" */
export type Log_Set_Input = {
  check_in_date?: InputMaybe<Scalars['date']['input']>;
  check_out_date?: InputMaybe<Scalars['date']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  listing_id?: InputMaybe<Scalars['String']['input']>;
  min_occupancy?: InputMaybe<Scalars['numeric']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Log_Stddev_Fields = {
  __typename?: 'log_stddev_fields';
  min_occupancy?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Log_Stddev_Pop_Fields = {
  __typename?: 'log_stddev_pop_fields';
  min_occupancy?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Log_Stddev_Samp_Fields = {
  __typename?: 'log_stddev_samp_fields';
  min_occupancy?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "log" */
export type Log_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Log_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Log_Stream_Cursor_Value_Input = {
  check_in_date?: InputMaybe<Scalars['date']['input']>;
  check_out_date?: InputMaybe<Scalars['date']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  listing_id?: InputMaybe<Scalars['String']['input']>;
  min_occupancy?: InputMaybe<Scalars['numeric']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Log_Sum_Fields = {
  __typename?: 'log_sum_fields';
  min_occupancy?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "log" */
export enum Log_Update_Column {
  /** column name */
  CheckInDate = 'check_in_date',
  /** column name */
  CheckOutDate = 'check_out_date',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ListingId = 'listing_id',
  /** column name */
  MinOccupancy = 'min_occupancy',
  /** column name */
  Tags = 'tags',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Log_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Log_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Log_Set_Input>;
  /** filter the rows which have to be updated */
  where: Log_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Log_Var_Pop_Fields = {
  __typename?: 'log_var_pop_fields';
  min_occupancy?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Log_Var_Samp_Fields = {
  __typename?: 'log_var_samp_fields';
  min_occupancy?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Log_Variance_Fields = {
  __typename?: 'log_variance_fields';
  min_occupancy?: Maybe<Scalars['Float']['output']>;
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
  /** delete data from the table: "log" */
  delete_log?: Maybe<Log_Mutation_Response>;
  /** delete single row from the table: "log" */
  delete_log_by_pk?: Maybe<Log>;
  /** delete data from the table: "review" */
  delete_review?: Maybe<Review_Mutation_Response>;
  /** delete single row from the table: "review" */
  delete_review_by_pk?: Maybe<Review>;
  /** insert data into the table: "listing" */
  insert_listing?: Maybe<Listing_Mutation_Response>;
  /** insert data into the table: "listing_image" */
  insert_listing_image?: Maybe<Listing_Image_Mutation_Response>;
  /** insert a single row into the table: "listing_image" */
  insert_listing_image_one?: Maybe<Listing_Image>;
  /** insert a single row into the table: "listing" */
  insert_listing_one?: Maybe<Listing>;
  /** insert data into the table: "log" */
  insert_log?: Maybe<Log_Mutation_Response>;
  /** insert a single row into the table: "log" */
  insert_log_one?: Maybe<Log>;
  /** insert data into the table: "review" */
  insert_review?: Maybe<Review_Mutation_Response>;
  /** insert a single row into the table: "review" */
  insert_review_one?: Maybe<Review>;
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
  /** update data of the table: "log" */
  update_log?: Maybe<Log_Mutation_Response>;
  /** update single row of the table: "log" */
  update_log_by_pk?: Maybe<Log>;
  /** update multiples rows of table: "log" */
  update_log_many?: Maybe<Array<Maybe<Log_Mutation_Response>>>;
  /** update data of the table: "review" */
  update_review?: Maybe<Review_Mutation_Response>;
  /** update single row of the table: "review" */
  update_review_by_pk?: Maybe<Review>;
  /** update multiples rows of table: "review" */
  update_review_many?: Maybe<Array<Maybe<Review_Mutation_Response>>>;
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
export type Mutation_RootDelete_LogArgs = {
  where: Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Log_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ReviewArgs = {
  where: Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Review_By_PkArgs = {
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
export type Mutation_RootInsert_LogArgs = {
  objects: Array<Log_Insert_Input>;
  on_conflict?: InputMaybe<Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Log_OneArgs = {
  object: Log_Insert_Input;
  on_conflict?: InputMaybe<Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReviewArgs = {
  objects: Array<Review_Insert_Input>;
  on_conflict?: InputMaybe<Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_OneArgs = {
  object: Review_Insert_Input;
  on_conflict?: InputMaybe<Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ListingArgs = {
  _append?: InputMaybe<Listing_Append_Input>;
  _delete_at_path?: InputMaybe<Listing_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Listing_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Listing_Delete_Key_Input>;
  _inc?: InputMaybe<Listing_Inc_Input>;
  _prepend?: InputMaybe<Listing_Prepend_Input>;
  _set?: InputMaybe<Listing_Set_Input>;
  where: Listing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Listing_By_PkArgs = {
  _append?: InputMaybe<Listing_Append_Input>;
  _delete_at_path?: InputMaybe<Listing_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Listing_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Listing_Delete_Key_Input>;
  _inc?: InputMaybe<Listing_Inc_Input>;
  _prepend?: InputMaybe<Listing_Prepend_Input>;
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


/** mutation root */
export type Mutation_RootUpdate_LogArgs = {
  _inc?: InputMaybe<Log_Inc_Input>;
  _set?: InputMaybe<Log_Set_Input>;
  where: Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Log_By_PkArgs = {
  _inc?: InputMaybe<Log_Inc_Input>;
  _set?: InputMaybe<Log_Set_Input>;
  pk_columns: Log_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Log_ManyArgs = {
  updates: Array<Log_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ReviewArgs = {
  _inc?: InputMaybe<Review_Inc_Input>;
  _set?: InputMaybe<Review_Set_Input>;
  where: Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Review_By_PkArgs = {
  _inc?: InputMaybe<Review_Inc_Input>;
  _set?: InputMaybe<Review_Set_Input>;
  pk_columns: Review_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Review_ManyArgs = {
  updates: Array<Review_Updates>;
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
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** fetch data from the table: "review" */
  review: Array<Review>;
  /** fetch aggregated fields from the table: "review" */
  review_aggregate: Review_Aggregate;
  /** fetch data from the table: "review" using primary key columns */
  review_by_pk?: Maybe<Review>;
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


export type Query_RootLogArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Query_RootLog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Query_RootLog_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


export type Query_RootReview_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


export type Query_RootReview_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "review" */
export type Review = {
  __typename?: 'review';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  listing_id: Scalars['uuid']['output'];
  rating: Scalars['numeric']['output'];
  review: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "review" */
export type Review_Aggregate = {
  __typename?: 'review_aggregate';
  aggregate?: Maybe<Review_Aggregate_Fields>;
  nodes: Array<Review>;
};

/** aggregate fields of "review" */
export type Review_Aggregate_Fields = {
  __typename?: 'review_aggregate_fields';
  avg?: Maybe<Review_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Review_Max_Fields>;
  min?: Maybe<Review_Min_Fields>;
  stddev?: Maybe<Review_Stddev_Fields>;
  stddev_pop?: Maybe<Review_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Review_Stddev_Samp_Fields>;
  sum?: Maybe<Review_Sum_Fields>;
  var_pop?: Maybe<Review_Var_Pop_Fields>;
  var_samp?: Maybe<Review_Var_Samp_Fields>;
  variance?: Maybe<Review_Variance_Fields>;
};


/** aggregate fields of "review" */
export type Review_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Review_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Review_Avg_Fields = {
  __typename?: 'review_avg_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "review". All fields are combined with a logical 'AND'. */
export type Review_Bool_Exp = {
  _and?: InputMaybe<Array<Review_Bool_Exp>>;
  _not?: InputMaybe<Review_Bool_Exp>;
  _or?: InputMaybe<Array<Review_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  listing_id?: InputMaybe<Uuid_Comparison_Exp>;
  rating?: InputMaybe<Numeric_Comparison_Exp>;
  review?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "review" */
export enum Review_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReviewPkey = 'review_pkey'
}

/** input type for incrementing numeric columns in table "review" */
export type Review_Inc_Input = {
  rating?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "review" */
export type Review_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  listing_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Review_Max_Fields = {
  __typename?: 'review_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  listing_id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Review_Min_Fields = {
  __typename?: 'review_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  listing_id?: Maybe<Scalars['uuid']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "review" */
export type Review_Mutation_Response = {
  __typename?: 'review_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Review>;
};

/** on_conflict condition type for table "review" */
export type Review_On_Conflict = {
  constraint: Review_Constraint;
  update_columns?: Array<Review_Update_Column>;
  where?: InputMaybe<Review_Bool_Exp>;
};

/** Ordering options when selecting data from "review". */
export type Review_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  listing_id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  review?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: review */
export type Review_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "review" */
export enum Review_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ListingId = 'listing_id',
  /** column name */
  Rating = 'rating',
  /** column name */
  Review = 'review',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "review" */
export type Review_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  listing_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Review_Stddev_Fields = {
  __typename?: 'review_stddev_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Review_Stddev_Pop_Fields = {
  __typename?: 'review_stddev_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Review_Stddev_Samp_Fields = {
  __typename?: 'review_stddev_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "review" */
export type Review_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Review_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Review_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  listing_id?: InputMaybe<Scalars['uuid']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Review_Sum_Fields = {
  __typename?: 'review_sum_fields';
  rating?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "review" */
export enum Review_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ListingId = 'listing_id',
  /** column name */
  Rating = 'rating',
  /** column name */
  Review = 'review',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Review_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Review_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Review_Set_Input>;
  /** filter the rows which have to be updated */
  where: Review_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Review_Var_Pop_Fields = {
  __typename?: 'review_var_pop_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Review_Var_Samp_Fields = {
  __typename?: 'review_var_samp_fields';
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Review_Variance_Fields = {
  __typename?: 'review_variance_fields';
  rating?: Maybe<Scalars['Float']['output']>;
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
  /** fetch data from the table: "log" */
  log: Array<Log>;
  /** fetch aggregated fields from the table: "log" */
  log_aggregate: Log_Aggregate;
  /** fetch data from the table: "log" using primary key columns */
  log_by_pk?: Maybe<Log>;
  /** fetch data from the table in a streaming manner: "log" */
  log_stream: Array<Log>;
  /** fetch data from the table: "review" */
  review: Array<Review>;
  /** fetch aggregated fields from the table: "review" */
  review_aggregate: Review_Aggregate;
  /** fetch data from the table: "review" using primary key columns */
  review_by_pk?: Maybe<Review>;
  /** fetch data from the table in a streaming manner: "review" */
  review_stream: Array<Review>;
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


export type Subscription_RootLogArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Subscription_RootLog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Log_Order_By>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Subscription_RootLog_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLog_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Log_Stream_Cursor_Input>>;
  where?: InputMaybe<Log_Bool_Exp>;
};


export type Subscription_RootReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


export type Subscription_RootReview_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


export type Subscription_RootReview_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootReview_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Review_Stream_Cursor_Input>>;
  where?: InputMaybe<Review_Bool_Exp>;
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

export type CreateListingWithImagesMutationVariables = Exact<{
  objects: Array<Listing_Insert_Input> | Listing_Insert_Input;
}>;


export type CreateListingWithImagesMutation = { __typename?: 'mutation_root', insert_listing?: { __typename?: 'listing_mutation_response', returning: Array<{ __typename?: 'listing', id: any, created_at: any }> } | null };

export type InsertListingMutationVariables = Exact<{
  nickname: Scalars['String']['input'];
  no_of_beds: Scalars['numeric']['input'];
  no_of_bathrooms: Scalars['numeric']['input'];
  no_of_guests: Scalars['numeric']['input'];
  price: Scalars['numeric']['input'];
  rating?: InputMaybe<Scalars['numeric']['input']>;
  title: Scalars['String']['input'];
  transit?: InputMaybe<Scalars['String']['input']>;
  summary?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  space?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  house_rules?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  access?: InputMaybe<Scalars['String']['input']>;
  interaction_with_guests?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<Scalars['String']['input']>;
  inquire_now_mail_to?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
}>;


export type InsertListingMutation = { __typename?: 'mutation_root', insert_listing?: { __typename?: 'listing_mutation_response', returning: Array<{ __typename?: 'listing', id: any, title: string }> } | null };

export type AddListingImagesMutationVariables = Exact<{
  objects: Array<Listing_Image_Insert_Input> | Listing_Image_Insert_Input;
}>;


export type AddListingImagesMutation = { __typename?: 'mutation_root', insert_listing_image?: { __typename?: 'listing_image_mutation_response', returning: Array<{ __typename?: 'listing_image', url: string, id: any }> } | null };

export type UpdateListingByPkMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  _set?: InputMaybe<Listing_Set_Input>;
}>;


export type UpdateListingByPkMutation = { __typename?: 'mutation_root', update_listing_by_pk?: { __typename?: 'listing', id: any, title: string } | null };

export type DeleteListingMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteListingMutation = { __typename?: 'mutation_root', delete_listing_by_pk?: { __typename?: 'listing', id: any } | null };

export type DeleteListingImagesMutationVariables = Exact<{
  _eq: Scalars['uuid']['input'];
}>;


export type DeleteListingImagesMutation = { __typename?: 'mutation_root', delete_listing_image?: { __typename?: 'listing_image_mutation_response', returning: Array<{ __typename?: 'listing_image', id: any }> } | null };

export type AllListingsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllListingsQuery = { __typename?: 'query_root', data: Array<{ __typename?: 'listing', price: any, rating: any, title: string, isProd: boolean, id: any, no_of_beds: any, no_of_bathrooms: any, nickname: string, currency?: string | null }>, totalCount: { __typename?: 'listing_aggregate', aggregate?: { __typename?: 'listing_aggregate_fields', count: number } | null } };

export type AllLogsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllLogsQuery = { __typename?: 'query_root', log: Array<{ __typename?: 'log', city?: string | null, country?: string | null, check_out_date?: any | null, check_in_date?: any | null, created_at: any, listing_id?: string | null, min_occupancy?: any | null, tags?: string | null, type?: string | null, id: any }> };

export type ListingByPkQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type ListingByPkQuery = { __typename?: 'query_root', listing_by_pk?: { __typename?: 'listing', created_at: any, id: any, inquire_now_mail_to: string, nickname: string, no_of_bathrooms: any, no_of_beds: any, no_of_guests: any, price: any, rating: any, title: string, isProd: boolean, space?: string | null, state?: string | null, summary?: string | null, tags?: any | null, transit?: string | null, updated_at: any, video?: string | null, neighborhood?: string | null, house_rules?: string | null, country?: string | null, city?: string | null, access?: string | null, interaction_with_guests?: string | null, currency?: string | null, images: Array<{ __typename?: 'listing_image', id: any, url: string }> } | null };


export const CreateListingWithImagesDocument = gql`
    mutation createListingWithImages($objects: [listing_insert_input!]!) {
  insert_listing(objects: $objects) {
    returning {
      id
      created_at
    }
  }
}
    `;
export type CreateListingWithImagesMutationFn = Apollo.MutationFunction<CreateListingWithImagesMutation, CreateListingWithImagesMutationVariables>;

/**
 * __useCreateListingWithImagesMutation__
 *
 * To run a mutation, you first call `useCreateListingWithImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListingWithImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListingWithImagesMutation, { data, loading, error }] = useCreateListingWithImagesMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useCreateListingWithImagesMutation(baseOptions?: Apollo.MutationHookOptions<CreateListingWithImagesMutation, CreateListingWithImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateListingWithImagesMutation, CreateListingWithImagesMutationVariables>(CreateListingWithImagesDocument, options);
      }
export type CreateListingWithImagesMutationHookResult = ReturnType<typeof useCreateListingWithImagesMutation>;
export type CreateListingWithImagesMutationResult = Apollo.MutationResult<CreateListingWithImagesMutation>;
export type CreateListingWithImagesMutationOptions = Apollo.BaseMutationOptions<CreateListingWithImagesMutation, CreateListingWithImagesMutationVariables>;
export const InsertListingDocument = gql`
    mutation insertListing($nickname: String!, $no_of_beds: numeric!, $no_of_bathrooms: numeric!, $no_of_guests: numeric!, $price: numeric!, $rating: numeric, $title: String!, $transit: String = "", $summary: String = "", $state: String = "", $space: String = "", $notes: String = "", $neighborhood: String = "", $house_rules: String = "", $country: String = "", $city: String = "", $access: String = "", $interaction_with_guests: String = "", $video: String = "", $inquire_now_mail_to: String = "", $currency: String = "") {
  insert_listing(
    objects: {nickname: $nickname, no_of_beds: $no_of_beds, no_of_bathrooms: $no_of_bathrooms, no_of_guests: $no_of_guests, price: $price, rating: $rating, title: $title, transit: $transit, summary: $summary, state: $state, space: $space, notes: $notes, neighborhood: $neighborhood, house_rules: $house_rules, country: $country, city: $city, access: $access, interaction_with_guests: $interaction_with_guests, video: $video, inquire_now_mail_to: $inquire_now_mail_to, currency: $currency}
  ) {
    returning {
      id
      title
    }
  }
}
    `;
export type InsertListingMutationFn = Apollo.MutationFunction<InsertListingMutation, InsertListingMutationVariables>;

/**
 * __useInsertListingMutation__
 *
 * To run a mutation, you first call `useInsertListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertListingMutation, { data, loading, error }] = useInsertListingMutation({
 *   variables: {
 *      nickname: // value for 'nickname'
 *      no_of_beds: // value for 'no_of_beds'
 *      no_of_bathrooms: // value for 'no_of_bathrooms'
 *      no_of_guests: // value for 'no_of_guests'
 *      price: // value for 'price'
 *      rating: // value for 'rating'
 *      title: // value for 'title'
 *      transit: // value for 'transit'
 *      summary: // value for 'summary'
 *      state: // value for 'state'
 *      space: // value for 'space'
 *      notes: // value for 'notes'
 *      neighborhood: // value for 'neighborhood'
 *      house_rules: // value for 'house_rules'
 *      country: // value for 'country'
 *      city: // value for 'city'
 *      access: // value for 'access'
 *      interaction_with_guests: // value for 'interaction_with_guests'
 *      video: // value for 'video'
 *      inquire_now_mail_to: // value for 'inquire_now_mail_to'
 *      currency: // value for 'currency'
 *   },
 * });
 */
export function useInsertListingMutation(baseOptions?: Apollo.MutationHookOptions<InsertListingMutation, InsertListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertListingMutation, InsertListingMutationVariables>(InsertListingDocument, options);
      }
export type InsertListingMutationHookResult = ReturnType<typeof useInsertListingMutation>;
export type InsertListingMutationResult = Apollo.MutationResult<InsertListingMutation>;
export type InsertListingMutationOptions = Apollo.BaseMutationOptions<InsertListingMutation, InsertListingMutationVariables>;
export const AddListingImagesDocument = gql`
    mutation addListingImages($objects: [listing_image_insert_input!]!) {
  insert_listing_image(objects: $objects) {
    returning {
      url
      id
    }
  }
}
    `;
export type AddListingImagesMutationFn = Apollo.MutationFunction<AddListingImagesMutation, AddListingImagesMutationVariables>;

/**
 * __useAddListingImagesMutation__
 *
 * To run a mutation, you first call `useAddListingImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddListingImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addListingImagesMutation, { data, loading, error }] = useAddListingImagesMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useAddListingImagesMutation(baseOptions?: Apollo.MutationHookOptions<AddListingImagesMutation, AddListingImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddListingImagesMutation, AddListingImagesMutationVariables>(AddListingImagesDocument, options);
      }
export type AddListingImagesMutationHookResult = ReturnType<typeof useAddListingImagesMutation>;
export type AddListingImagesMutationResult = Apollo.MutationResult<AddListingImagesMutation>;
export type AddListingImagesMutationOptions = Apollo.BaseMutationOptions<AddListingImagesMutation, AddListingImagesMutationVariables>;
export const UpdateListingByPkDocument = gql`
    mutation updateListingByPk($id: uuid!, $_set: listing_set_input = {inquire_now_mail_to: ""}) {
  update_listing_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
    title
  }
}
    `;
export type UpdateListingByPkMutationFn = Apollo.MutationFunction<UpdateListingByPkMutation, UpdateListingByPkMutationVariables>;

/**
 * __useUpdateListingByPkMutation__
 *
 * To run a mutation, you first call `useUpdateListingByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateListingByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateListingByPkMutation, { data, loading, error }] = useUpdateListingByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      _set: // value for '_set'
 *   },
 * });
 */
export function useUpdateListingByPkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateListingByPkMutation, UpdateListingByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateListingByPkMutation, UpdateListingByPkMutationVariables>(UpdateListingByPkDocument, options);
      }
export type UpdateListingByPkMutationHookResult = ReturnType<typeof useUpdateListingByPkMutation>;
export type UpdateListingByPkMutationResult = Apollo.MutationResult<UpdateListingByPkMutation>;
export type UpdateListingByPkMutationOptions = Apollo.BaseMutationOptions<UpdateListingByPkMutation, UpdateListingByPkMutationVariables>;
export const DeleteListingDocument = gql`
    mutation deleteListing($id: uuid!) {
  delete_listing_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteListingMutationFn = Apollo.MutationFunction<DeleteListingMutation, DeleteListingMutationVariables>;

/**
 * __useDeleteListingMutation__
 *
 * To run a mutation, you first call `useDeleteListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteListingMutation, { data, loading, error }] = useDeleteListingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteListingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteListingMutation, DeleteListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteListingMutation, DeleteListingMutationVariables>(DeleteListingDocument, options);
      }
export type DeleteListingMutationHookResult = ReturnType<typeof useDeleteListingMutation>;
export type DeleteListingMutationResult = Apollo.MutationResult<DeleteListingMutation>;
export type DeleteListingMutationOptions = Apollo.BaseMutationOptions<DeleteListingMutation, DeleteListingMutationVariables>;
export const DeleteListingImagesDocument = gql`
    mutation deleteListingImages($_eq: uuid!) {
  delete_listing_image(where: {listing_id: {_eq: $_eq}}) {
    returning {
      id
    }
  }
}
    `;
export type DeleteListingImagesMutationFn = Apollo.MutationFunction<DeleteListingImagesMutation, DeleteListingImagesMutationVariables>;

/**
 * __useDeleteListingImagesMutation__
 *
 * To run a mutation, you first call `useDeleteListingImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteListingImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteListingImagesMutation, { data, loading, error }] = useDeleteListingImagesMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useDeleteListingImagesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteListingImagesMutation, DeleteListingImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteListingImagesMutation, DeleteListingImagesMutationVariables>(DeleteListingImagesDocument, options);
      }
export type DeleteListingImagesMutationHookResult = ReturnType<typeof useDeleteListingImagesMutation>;
export type DeleteListingImagesMutationResult = Apollo.MutationResult<DeleteListingImagesMutation>;
export type DeleteListingImagesMutationOptions = Apollo.BaseMutationOptions<DeleteListingImagesMutation, DeleteListingImagesMutationVariables>;
export const AllListingsDocument = gql`
    query allListings {
  data: listing {
    price
    rating
    title
    isProd
    id
    no_of_beds
    no_of_bathrooms
    nickname
    currency
  }
  totalCount: listing_aggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useAllListingsQuery__
 *
 * To run a query within a React component, call `useAllListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllListingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllListingsQuery(baseOptions?: Apollo.QueryHookOptions<AllListingsQuery, AllListingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllListingsQuery, AllListingsQueryVariables>(AllListingsDocument, options);
      }
export function useAllListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllListingsQuery, AllListingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllListingsQuery, AllListingsQueryVariables>(AllListingsDocument, options);
        }
export function useAllListingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllListingsQuery, AllListingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllListingsQuery, AllListingsQueryVariables>(AllListingsDocument, options);
        }
export type AllListingsQueryHookResult = ReturnType<typeof useAllListingsQuery>;
export type AllListingsLazyQueryHookResult = ReturnType<typeof useAllListingsLazyQuery>;
export type AllListingsSuspenseQueryHookResult = ReturnType<typeof useAllListingsSuspenseQuery>;
export type AllListingsQueryResult = Apollo.QueryResult<AllListingsQuery, AllListingsQueryVariables>;
export function refetchAllListingsQuery(variables?: AllListingsQueryVariables) {
      return { query: AllListingsDocument, variables: variables }
    }
export const AllLogsDocument = gql`
    query allLogs {
  log {
    city
    country
    check_out_date
    check_in_date
    created_at
    listing_id
    min_occupancy
    tags
    type
    id
  }
}
    `;

/**
 * __useAllLogsQuery__
 *
 * To run a query within a React component, call `useAllLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllLogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllLogsQuery(baseOptions?: Apollo.QueryHookOptions<AllLogsQuery, AllLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllLogsQuery, AllLogsQueryVariables>(AllLogsDocument, options);
      }
export function useAllLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllLogsQuery, AllLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllLogsQuery, AllLogsQueryVariables>(AllLogsDocument, options);
        }
export function useAllLogsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllLogsQuery, AllLogsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllLogsQuery, AllLogsQueryVariables>(AllLogsDocument, options);
        }
export type AllLogsQueryHookResult = ReturnType<typeof useAllLogsQuery>;
export type AllLogsLazyQueryHookResult = ReturnType<typeof useAllLogsLazyQuery>;
export type AllLogsSuspenseQueryHookResult = ReturnType<typeof useAllLogsSuspenseQuery>;
export type AllLogsQueryResult = Apollo.QueryResult<AllLogsQuery, AllLogsQueryVariables>;
export function refetchAllLogsQuery(variables?: AllLogsQueryVariables) {
      return { query: AllLogsDocument, variables: variables }
    }
export const ListingByPkDocument = gql`
    query listingByPk($id: uuid!) {
  listing_by_pk(id: $id) {
    created_at
    id
    images {
      id
      url
    }
    inquire_now_mail_to
    nickname
    no_of_bathrooms
    no_of_beds
    no_of_guests
    price
    rating
    title
    isProd
    space
    state
    summary
    tags
    transit
    updated_at
    video
    neighborhood
    house_rules
    country
    city
    access
    interaction_with_guests
    currency
  }
}
    `;

/**
 * __useListingByPkQuery__
 *
 * To run a query within a React component, call `useListingByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useListingByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListingByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useListingByPkQuery(baseOptions: Apollo.QueryHookOptions<ListingByPkQuery, ListingByPkQueryVariables> & ({ variables: ListingByPkQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListingByPkQuery, ListingByPkQueryVariables>(ListingByPkDocument, options);
      }
export function useListingByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListingByPkQuery, ListingByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListingByPkQuery, ListingByPkQueryVariables>(ListingByPkDocument, options);
        }
export function useListingByPkSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListingByPkQuery, ListingByPkQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListingByPkQuery, ListingByPkQueryVariables>(ListingByPkDocument, options);
        }
export type ListingByPkQueryHookResult = ReturnType<typeof useListingByPkQuery>;
export type ListingByPkLazyQueryHookResult = ReturnType<typeof useListingByPkLazyQuery>;
export type ListingByPkSuspenseQueryHookResult = ReturnType<typeof useListingByPkSuspenseQuery>;
export type ListingByPkQueryResult = Apollo.QueryResult<ListingByPkQuery, ListingByPkQueryVariables>;
export function refetchListingByPkQuery(variables: ListingByPkQueryVariables) {
      return { query: ListingByPkDocument, variables: variables }
    }