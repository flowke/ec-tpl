import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [pingResult, setPingResult] = useState<string | null>(null);

  const handlePing = async () => {
    const res = await window.api?.ping();
    setPingResult(res ?? 'no response');
  };

  return (
    <main style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: 24 }}>
      <h1>Electron + Vite + React</h1>
      <p>快速开始模板</p>

      <section style={{ marginTop: 24 }}>
        <button onClick={() => setCount((c) => c + 1)}>count: {count}</button>
      </section>

      <section style={{ marginTop: 16 }}>
        <button onClick={handlePing}>Ping 主进程</button>
        <div style={{ marginTop: 8 }}>返回: {pingResult ?? '尚未调用'}</div>
      </section>
    </main>
  );
}

export default App;

