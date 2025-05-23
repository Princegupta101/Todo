import axios from 'axios';

import {cohere} from '../config/cohere.js'
import { supabase } from "../config/supabase.js";

export const summarizeTodos = async (req, res) => {
    try{
        const {data, error} = await supabase.from('todos').select('*')
    
        if(error)
            return res.status(500).json({
                error: error.message
            })
            
        if(!data.length) 
            return res.status(400).json({
                error: 'No data found'
            })

        const todos = data.map((todo) => todo.title).join(', ');

     const response = await cohere.chat({
        model: 'command-a-03-2025',
        message: `Summarize the following to-do list:\n${todos}`,
        });
        console.log(response);

        const summary = response.text;
        const slakWebhookUrl = process.env.SLACK_WEBHOOK_URL;
        if(!slakWebhookUrl) 
            return res.status(400).json({
                        error: 'No slack webhook url found'
                    })
                    
        try {
            await axios.post(slakWebhookUrl, {
                text: summary
            })
            res.status(200).json({
                success: true,
                message:'Summary sent to Slack successfully',
                summary,
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: error.message
            })
        }
    }catch (error) {
        console.log(error)
        res.status(500).json({
            error: error.message
        })
    }
};