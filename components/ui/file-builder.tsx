"use client";
import { useStepStore } from "@/store/useStepStore";
import { FileSystem, FolderNode } from "@/types/fileSystemType";
import { Steps } from "@/types/stepsType";
import { useMemo, useState } from "react";
import { File, Folder, Tree } from "../magicui/file-tree";
import { LuFiles } from "react-icons/lu";
import { Separator } from "./separator";
export const FileBuilder = ({
  setSelectedFile,
}: {
  setSelectedFile: (fileDate: { name: string; content: string }) => void;
}) => {
  const steps = useStepStore((state) => state.steps);
  const fileSystem = useMemo(() => buildFileSystem(steps), [steps]);

  return (
    <div>
      <div className="font-sans m-2 flex gap-1 items-center">
        <LuFiles />
        <div>Files</div>
      </div>
      <Separator className="mb-2" />
      <Tree>{renderFileTree(fileSystem, setSelectedFile)}</Tree>
    </div>
  );
};

function buildFileSystem(steps: Steps[]): FileSystem {
  const fs: FileSystem = {};

  steps.forEach(({ filePath, content }) => {
    const parts = filePath?.split("/");
    const fileName = parts?.pop();
    let current = fs;

    for (const part of parts!) {
      if (!current[part]) {
        current[part] = {
          type: "folder",
          children: {},
        };
      }
      const folder = current[part] as FolderNode;

      if (folder.type !== "folder") {
        break;
      }
      current = folder.children;
    }
    if (fileName) {
      current[fileName] = {
        type: "file",
        content,
      };
    }
  });
  return fs;
}

function renderFileTree(
  fs: FileSystem,
  onFileClick: (fileData: { name: string, content: string }) => void
): React.ReactNode {

  return Object.entries(fs).map(([name, node]) => {
    if (node.type === "folder") {
      return (
        <Folder className="my-1" value={name} key={name} element={name}>
          {renderFileTree(node.children, onFileClick)}
        </Folder>
      );
    } else {
      return (
        <File
          className="my-1"
          key={name}
          value={name}
          onClick={() => onFileClick({ name, content: node.content || ''})}
        >
          {name}
        </File>
      );
    }
  });
}
