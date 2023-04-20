/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ListItemCreateFormInputValues = {
    title?: string;
    quantity?: number;
    done?: boolean;
};
export declare type ListItemCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    done?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListItemCreateFormOverridesProps = {
    ListItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    done?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ListItemCreateFormProps = React.PropsWithChildren<{
    overrides?: ListItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ListItemCreateFormInputValues) => ListItemCreateFormInputValues;
    onSuccess?: (fields: ListItemCreateFormInputValues) => void;
    onError?: (fields: ListItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ListItemCreateFormInputValues) => ListItemCreateFormInputValues;
    onValidate?: ListItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function ListItemCreateForm(props: ListItemCreateFormProps): React.ReactElement;
