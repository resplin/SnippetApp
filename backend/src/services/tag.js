import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getTagRecords() {
    return prisma.tag.findMany();
}

export async function getTagRecord(id) {
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.tag.findUnique({
        where: { id: id },
    });
}

export async function createTagRecord(tagData) {
    return prisma.tag.create({
        data: tagData,
    });
}

export async function updateTagRecord(id, tagData){
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.tag.update({
        where: { id: id },
        data: tagData,
    });
}

export async function deleteTagRecord(id){
    if (!Number.isInteger(id)) throw new Error('Invalid ID');

    return prisma.tag.delete({
        where: { id: id },
    });
}
