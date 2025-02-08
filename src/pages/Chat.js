const Chat = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="p-4 bg-blue-600 text-white text-lg">チャット</div>
      <div className="flex-1 p-4 overflow-y-auto">メッセージ一覧</div>
      <div className="p-4 bg-white border-t flex">
        <input
          type="text"
          placeholder="メッセージを入力"
          className="flex-1 p-2 border rounded"
        />
        <button className="ml-2 p-2 bg-blue-500 text-white rounded">送信</button>
      </div>
    </div>
  );
};

export default Chat;