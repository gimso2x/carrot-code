import useMutation from "@/lib/client/useMutation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface UploadType {
  content?: string;
}

export default function TweetUpload({ mutate }) {
  const { register, handleSubmit, reset } = useForm();
  const [uploadTweet, { loading, data }] = useMutation("/api/tweet");
  const onSubmit = (data: UploadType) => {
    uploadTweet(data);
  };

  useEffect(() => {
    if (data?.ok) mutate();
    reset();
  }, [data]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea {...register("content", { required: true })}></textarea>
      <button type="submit">트윗 업로드</button>
      <style jsx>{`
        form {
          border: 2px solid gray;
          display:flex;
          margin-bottom: 10px;
        }
        textarea{
            width: 100%;
            border: 2px solid black;
        }
        button{
            border: 1px solid black;
            background: #999
        }
      `}</style>
    </form>
  );
}
