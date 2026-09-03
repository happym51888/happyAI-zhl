---
title: AI 全景概览
description: 用一张概念地图理解应用、LLM、RAG、Agent、框架和生产治理之间的关系。
---

## 六个层次

### 应用接口层

Python 负责实现业务逻辑，应用通过 HTTP API 调用模型和外部服务，并使用 JSON 传递消息与参数。

### 模型交互层

Prompt 把指令、问题和上下文交给 LLM；模型受到 Token 和上下文窗口限制，并返回文本、结构化输出或工具调用请求。

### 知识增强层

RAG 把外部资料切块、转换成 Embedding、执行向量检索和 Reranking，然后把相关内容加入 Prompt。

### Agent 编排层

Agent 使用 LLM 规划下一步、调用工具、读取 Observation，并结合记忆和状态继续循环。

### 开发框架层

LangChain 提供模型、检索和工具等通用组件，LangGraph 管理带状态、循环、暂停和恢复的 Agent 工作流。

### 生产治理层

Evaluation、Tracing、成本、权限和 Prompt Injection 防护贯穿整个系统，而不是上线前才补充的附加功能。

## 最核心的关系

- **LLM 不等于 Agent**：LLM 是模型，Agent 是围绕模型建立的目标驱动应用系统。
- **RAG 不等于训练模型**：RAG 在推理时提供外部知识，不会修改模型参数。
- **RAG 可以是 Agent 的工具**：Agent 可以根据任务决定是否搜索知识库。
- **Tool Calling 不等于工具已经执行**：模型只选择工具和参数，真正的执行由应用完成。
- **LangChain 不是必需品**：它帮助组织代码，但所有基本模式都可以不用框架实现。
- **LangGraph 更偏流程控制**：它适合需要状态、循环、人工审核和故障恢复的工作流。

## 建议阅读

1. [LLM 基础](../llm/)
2. [RAG 与知识检索](../rag/)
3. [AI Agent](../agent/)
4. [AI Agent 全景图](../projects/ai-agent-whole-picture/)
