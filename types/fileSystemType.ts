export type FileNode = {
    type: "file",
    content: string
}

export type FolderNode = {
    type: "folder",
    children: FileSystem
}

export type FileSystem = {
    [key: string]: FileNode | FolderNode
}