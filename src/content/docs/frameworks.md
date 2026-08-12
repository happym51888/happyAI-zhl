---
title: LangChain 与 LangGraph
description: 两个框架分别解决什么问题，以及应该在什么时候使用。
---

## LangChain

**LangChain** 提供调用模型、组织消息、定义工具、执行检索和构建 Agent 所需的通用接口与组件。

它主要帮助解决：

- 不同模型 API 的接口差异。
- 消息、工具和结构化输出的组织。
- 文档加载、检索器和 RAG 流程。
- 常见 Agent 构建模式。

## LangGraph

**LangGraph** 使用图和状态机编排可循环、可暂停、可恢复的 Agent 工作流。

它主要帮助解决：

- 多步骤和分支流程。
- Agent 的 State 管理。
- 循环与停止条件。
- 持久化、失败恢复和长时间任务。
- Human-in-the-loop。
- 多 Agent 之间的控制关系。

## 它们之间的关系

LangChain 更像一套可复用的 AI 应用组件，LangGraph 更像控制这些组件如何运行的工作流引擎。

二者可以一起使用，也可以分别使用；LangGraph 并不强制要求所有模型、工具和检索逻辑都来自 LangChain。

## 应该先学哪个

1. 先直接调用一次模型 API。
2. 自己实现一个简单 RAG。
3. 自己完成一次 Tool Calling 循环。
4. 使用 LangChain 减少模型、工具和检索相关的重复代码。
5. 当流程需要状态、分支、循环和人工审核时，再使用 LangGraph。

## 不要把框架当成基础概念

框架 API 会变化，但 Prompt、Tool Calling、RAG、State、Evaluation 和权限边界等基本概念更稳定。

因此学习时应该能够解释每个组件解决的问题，而不只是复制框架示例。
