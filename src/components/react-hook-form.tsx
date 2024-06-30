import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
    example?: string;
    exampleRequired: string;
};

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />

            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>Це поле обов'язкове</span>}

            <input type="submit" />
        </form>
    );
}
