import { model, Schema, Document } from 'mongoose';

export class Listing {
    body: string;
    botId: string;
    invite: string;
    githubURL: string;
    overview: string;
    ownerId: string;
    prefix: string;
    supportInvite: string; 
    tags: string[];
    websiteURL: string;
}

export interface Feedback {
    approved: boolean;
    message: string;
    by: string;
}

export interface Vote {
    at: Date;
    by: string;
}

export enum BotBadge {
    Featured = 'FEATURED'
}

export interface BotDocument extends Document {
    _id: string;
    approvedAt: Date;
    badges: BotBadge[];
    createdAt: Date;
    feedback: Feedback[];
    listing: Listing;
    ownerId: string;
    stats: { guildCount: number },
    totalVotes: number;
    lastVoteAt: Date;
    votes: Vote[];
}

export const SavedBot = model<BotDocument>('bot', new Schema({
    _id: String,
    approvedAt: Date,
    badges: { type: Array, default: [] },
    createdAt: Date,
    feedback: { type: Array, default: [] },
    listing: Object,
    ownerId: String,
    stats: { guildCount: Number },
    totalVotes: { type: Number, default: 0 },
    lastVoteAt: Date,
    votes: { type: Array, default: [] }
}));
