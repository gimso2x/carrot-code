import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: { email?: string }) => {
    fetch("/api/login-in", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(() => {
        alert("complete login");
        router.push("/");
      });
  };
  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span>Email</span>
            <input type="text" {...register("email")} />
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
      <style jsx>{`
        form,
        label {
          display: flex;
          flex-flow: column;
        }
        label > span {
          font-weight: 600;
        }
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .error {
          color: brown;
          margin: 1rem 0 0;
        }

        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
