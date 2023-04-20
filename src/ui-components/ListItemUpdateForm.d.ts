/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ListItem } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ListItemUpdateFormInputValues = {
    title?: string;
    quantity?: number;
    done?: boolean;
};
export declare type ListItemUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    done?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListItemUpdateFormOverridesProps = {
    ListItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    done?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ListItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: ListItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    listItem?: ListItem;
    onSubmit?: (fields: ListItemUpdateFormInputValues) => ListItemUpdateFormInputValues;
    onSuccess?: (fields: ListItemUpdateFormInputValues) => void;
    onError?: (fields: ListItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ListItemUpdateFormInputValues) => ListItemUpdateFormInputValues;
    onValidate?: ListItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ListItemUpdateForm(props: ListItemUpdateFormProps): React.ReactElement;
