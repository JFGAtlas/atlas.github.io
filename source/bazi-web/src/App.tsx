import React, { useMemo, useState } from 'react';
import { AlertCircle, CalendarDays, Sparkles } from 'lucide-react';
import { evaluateBazi, type BaziResult } from './utils/baziAlgorithm';
import './index.css';

function getLocalDatetimeValue() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 16);
}

function App() {
  const [datetime, setDatetime] = useState<string>(() => getLocalDatetimeValue());
  const [result, setResult] = useState<BaziResult | null>(null);
  const [error, setError] = useState<string>('');
  const [isCalculating, setIsCalculating] = useState(false);

  const pillars = useMemo(() => {
    if (!result) return [];

    return [
      { title: '年柱', value: result.bazi.slice(0, 2) },
      { title: '月柱', value: result.bazi.slice(2, 4) },
      { title: '日柱', value: result.bazi.slice(4, 6) },
      { title: '时柱', value: result.bazi.slice(6, 8) },
    ];
  }, [result]);

  const maxStrength = useMemo(() => {
    if (!result) return 1;

    return Math.max(...result.wuxingStrengths.map((item) => item.total), 1);
  }, [result]);

  const calculateBazi = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    try {
      setError('');
      setIsCalculating(true);

      if (!datetime) {
        setError('请选择出生日期和时间');
        return;
      }

      const date = new Date(datetime);
      if (Number.isNaN(date.getTime())) {
        setError('出生时间格式不正确，请重新选择');
        return;
      }

      const { Solar } = await import('lunar-javascript');
      const solar = Solar.fromDate(date);
      const lunar = solar.getLunar();
      const eightChar = lunar.getEightChar();
      
      const year = eightChar.getYear();
      const month = eightChar.getMonth();
      const day = eightChar.getDay();
      const time = eightChar.getTime();

      const baziString = `${year}${month}${day}${time}`;
      
      if (baziString.length !== 8) {
        setError('八字计算错误，请检查输入时间');
        return;
      }

      const evalResult = evaluateBazi(baziString);
      if (evalResult) {
        setResult(evalResult);
      } else {
        setError('五行计算出错，该时辰可能超出算法处理范围');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : '未知错误';
      setError('计算出错: ' + message);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>太极神算 · 八字解析</h1>
        <p>基于传统易学与五行生克理论的运势测算</p>
      </header>

      <main>
        <form className="glass-card input-card" onSubmit={calculateBazi}>
          <div className="form-group">
            <label htmlFor="datetime">
              <CalendarDays size={18} aria-hidden="true" />
              出生时间 (阳历)
            </label>
            <input 
              type="datetime-local" 
              id="datetime" 
              value={datetime}
              onChange={(e) => setDatetime(e.target.value)}
            />
          </div>
          
          <button className="calculate-button" type="submit" disabled={isCalculating}>
            <Sparkles size={20} aria-hidden="true" />
            {isCalculating ? '正在测算' : '测算运势'}
          </button>
          
          {error && (
            <div className="error-message" role="alert">
              <AlertCircle size={18} aria-hidden="true" />
              {error}
            </div>
          )}
        </form>

        {result && (
          <section className="glass-card result-card" aria-live="polite">
            <h2>命盘解析</h2>
            
            <div className="bazi-display">
              {pillars.map((pillar) => (
                <div className="pillar" key={pillar.title}>
                  <div className="pillar-title">{pillar.title}</div>
                  <div className="pillar-char">{pillar.value}</div>
                </div>
              ))}
            </div>

            <h3>五行强度分析</h3>
            <div className="wuxing-grid">
              {result.wuxingStrengths.map((item) => {
                const pct = Math.min(100, (item.total / maxStrength) * 100);
                
                return (
                  <div key={item.wuxing} className="wuxing-item" style={{ '--strength-pct': `${pct}%` } as React.CSSProperties}>
                    <div className="wuxing-label">{item.wuxing}</div>
                    <div className="wuxing-value">{item.total.toFixed(2)}</div>
                  </div>
                );
              })}
            </div>

            <div className="result-section">
              <div className="result-row">
                <span className="result-label">日主命属</span>
                <span className="result-value fate-value">{result.fateProp}</span>
              </div>
              
              <div className="result-row">
                <span className="result-label">同类得分 ({result.tongLeiProps.join('、')})</span>
                <span className="result-value">{result.tongLei.toFixed(2)}</span>
              </div>
              
              <div className="result-row">
                <span className="result-label">异类得分 ({result.yiLeiProps.join('、')})</span>
                <span className="result-value">{result.yiLei.toFixed(2)}</span>
              </div>
              
              <div className="result-row">
                <span className="result-label">五行平衡状态</span>
                <span className="result-value">{result.balance}</span>
              </div>
            </div>

            <div className="recommendation-box">
              <h3>大师建议</h3>
              <p>{result.recommendation}</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
