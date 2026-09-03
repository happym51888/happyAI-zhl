---
title: AI Agent 学习路线
description: 从编程基础、LLM 和 RAG，一步步学习到 Agent 工程化。
---

学习 AI Agent 时，最重要的不是先记住某个框架的 API，而是先理解每一层解决什么问题。

## 推荐顺序

### 1. 应用开发基础

先掌握 Python、HTTP API 和 JSON，能够编写程序、调用模型接口并处理返回结果。

### 2. LLM 基础

理解 Token、上下文窗口、Prompt、结构化输出和 Tool Calling，知道模型能做什么、不能做什么。

### 3. RAG 与知识检索

学习 Chunking、Embedding、向量检索和 Reranking，让模型能够使用外部资料回答问题。

### 4. 单 Agent

学习工具、规划、Observation、记忆、状态和 Human-in-the-loop，完成一个可控的工具调用循环。

### 5. LangChain 与 LangGraph

在理解基本组件以后，再使用框架减少重复代码并编排复杂、可恢复的工作流。

### 6. 生产工程

最后补齐 Evaluation、Tracing、成本控制、最小权限和 Prompt Injection 防护。

## 建议的第一个项目

构建一个“带引用的个人文档问答 Agent”：

1. 导入几篇自己的学习笔记。
2. 切块并建立向量索引。
3. 检索与问题相关的片段。
4. 让 LLM 根据片段回答并标注来源。
5. 增加一个搜索工具，由 Agent 判断何时调用。
6. 记录检索结果、工具调用、Token 和耗时。

这个项目可以同时串起 LLM、RAG、Agent、Evaluation 和 Tracing。

## 学习原则

- 先做单 Agent，再考虑 Multi-Agent。
- 先通过 RAG 解决知识问题，再考虑 Fine-tuning。
- 先用确定性工作流处理固定步骤，只把真正需要判断的部分交给 LLM。
- 每增加一个工具，都同时增加权限边界、错误处理和测试。

下一步：[阅读 AI 全景概览](../ai-basics/)。
