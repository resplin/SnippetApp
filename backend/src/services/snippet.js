import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getSnippetRecords() {
    return prisma.snippet.findMany();
}

export async function getSnippetRecord(id) {
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.snippet.findUnique({
        where: { id: id },
    });
}

export async function createSnippetRecord(snippetData) {
    return prisma.snippet.create({
        data: snippetData,
    });
}

export async function updateSnippetRecord(id, snippetData){
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.snippet.update({
        where: { id: id },
        data: snippetData,
    });
}

export async function deleteSnippetRecord(id){
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.snippet.delete({
        where: { id: id },
    });
}
