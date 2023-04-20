/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Action } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActionUpdateFormInputValues = {
    action?: string;
};
export declare type ActionUpdateFormValidationValues = {
    action?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionUpdateFormOverridesProps = {
    ActionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    action?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActionUpdateFormProps = React.PropsWithChildren<{
    overrides?: ActionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    action?: Action;
    onSubmit?: (fields: ActionUpdateFormInputValues) => ActionUpdateFormInputValues;
    onSuccess?: (fields: ActionUpdateFormInputValues) => void;
    onError?: (fields: ActionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActionUpdateFormInputValues) => ActionUpdateFormInputValues;
    onValidate?: ActionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ActionUpdateForm(props: ActionUpdateFormProps): React.ReactElement;
