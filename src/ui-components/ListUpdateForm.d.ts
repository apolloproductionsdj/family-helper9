/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { List } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ListUpdateFormInputValues = {
    title?: string;
    description?: string;
};
export declare type ListUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListUpdateFormOverridesProps = {
    ListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ListUpdateFormProps = React.PropsWithChildren<{
    overrides?: ListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    list?: List;
    onSubmit?: (fields: ListUpdateFormInputValues) => ListUpdateFormInputValues;
    onSuccess?: (fields: ListUpdateFormInputValues) => void;
    onError?: (fields: ListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ListUpdateFormInputValues) => ListUpdateFormInputValues;
    onValidate?: ListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ListUpdateForm(props: ListUpdateFormProps): React.ReactElement;
