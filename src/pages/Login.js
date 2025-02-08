import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("ログイン処理");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-semibold text-center">ログイン</h2>
        <input
          type="email"
          placeholder="メールアドレス"
          className="mt-4 w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          className="mt-2 w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded"
          onClick={handleLogin}
        >
          ログイン
        </button>
      </div>
    </div>
  );
};

export default Login;