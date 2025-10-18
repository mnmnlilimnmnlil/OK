import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Joi from 'joi';
import OpenAI from 'openai';

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

console.log('API Key:', process.env.OPENAI_API_KEY ? 'Loaded' : 'Not loaded');
console.log('Port:', process.env.PORT);

const client = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || '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'
});

// 스키마 검증
const ChatRequestSchema = Joi.object({
  messages: Joi.array()
    .items(
      Joi.object({
        role: Joi.string().valid('system', 'user', 'assistant').required(),
        content: Joi.string().min(1).required()
      })
    )
    .min(1)
    .required(),
  model: Joi.string().default('gpt-4o-mini'),
  temperature: Joi.number().min(0).max(2).default(0.7)
});

// 기존 API (하위 호환성)
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// 새로운 정교한 API
app.post('/api/ok-e', async (req, res) => {
  const { error, value } = ChatRequestSchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({ 
      error: 'Invalid request', 
      details: error.details 
    });
  }
  
  const { messages, model, temperature } = value;

  try {
    const response = await client.chat.completions.create({
      model,
      messages,
      temperature
    });

    return res.json({
      id: response.id,
      message: response.choices?.[0]?.message ?? null,
      usage: response.usage ?? null
    });
  } catch (err) {
    const error = err;
    return res
      .status(error?.status ?? 500)
      .json({ 
        error: error?.message ?? 'Server error', 
        code: error?.code 
      });
  }
});

const PORT = Number(process.env.PORT || 5000);
app.listen(PORT, () => {
  console.log(`[ok-e] server running on http://localhost:${PORT}`);
});