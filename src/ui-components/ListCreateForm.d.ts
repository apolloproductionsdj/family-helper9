/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ListCreateFormInputValues = {
    title?: string;
    description?: string;
};
export declare type ListCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListCreateFormOverridesProps = {
    ListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ListCreateFormProps = React.PropsWithChildren<{
    overrides?: ListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ListCreateFormInputValues) => ListCreateFormInputValues;
    onSuccess?: (fields: ListCreateFormInputValues) => void;
    onError?: (fields: ListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ListCreateFormInputValues) => ListCreateFormInputValues;
    onValidate?: ListCreateFormValidationValues;
} & React.CSSProperties>;
export default function ListCreateForm(props: ListCreateFormProps): React.ReactElement;
