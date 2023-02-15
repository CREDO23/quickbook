import { ReactNode } from "react";

export interface InputProps {
    placeholder?: string;
    label?: string;
    value?: string;
    onChange: (e: any) => void;
    onPressEnter?: (e: any) => void;
    addonAfter?: ReactNode;
    addonBefore?: ReactNode;
    allowClear?: boolean | { clearIcon?: ReactNode };
    defaultValue?: string;
    disabled?: boolean;
    maxLength?: number;
    showCount?: boolean;
    status?: "error" | "warning";
    prefix?: ReactNode;
    suffix?: ReactNode;
    size?: "large" | "middle" | "small";
    type?: "search" | "password" | "text" | "textarea";
    autoSize?: boolean | { minRows: number; maxRows: number };
    onSearch?: (value: any, e: any) => void;
    loading?: boolean;
    showLabel?: boolean;
    error?: string;
    labelColor?: "primary" | "secondary";
    required?: boolean;
}
