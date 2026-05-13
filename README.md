# Atlas

八字排盘与五行强度分析项目集合。

## 项目结构

- `bazi-web/`：React + TypeScript + Vite 前端，提供出生时间输入、八字排盘、五行强度与平衡建议展示。
- `BaZiHelper/`：早期 Python/Flask 版本，包含太阳时与八字计算相关实验代码。
- `BaziEval/`：C++ 版本五行强度算法与说明资料。

## 运行前端

```bash
cd bazi-web
npm install
npm run dev
```

生产构建：

```bash
cd bazi-web
npm run build
```

代码检查：

```bash
cd bazi-web
npm run lint
```

## 说明

本项目用于传统历法、八字与五行算法的学习和演示。测算结果仅供参考。
