import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  name?: string;
  email?: string;
};

export default function CreateAccount() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    fetch("/api/create-account", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      alert("account create please login!");
      router.push("/log-in");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}  className="create-account">
      <h1>Create Account</h1>
        <div>
          <label>
            Name:{" "}
            <input type="text" {...register("name", { required: true })} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" {...register("email", { required: true })} />
          </label>
        </div>
        <div>
          <button type="submit">Create Account</button>
        </div>
      </form>
      <style jsx>{`
        form,
        label {
          display: flex;
          flex-flow: column;
        }
        .create-account {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .create-account h1{
            font-size: 20px;
            font-weight: 700;
        }
        input {
            padding: 8px;
            margin: 0.3rem 0 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
      `}</style>
    </div>
  );
}
