import { StepType, Status, Steps } from '../../types/stepsType';

export function parser(prompt: string): Steps[] {
    
    const steps: Steps[] = [];
    
    try {
        
        const artifactMatch = prompt.match(/<stratoArtifact[^>]*>([\s\S]*?)<\/stratoArtifact>/);
        
        if (!artifactMatch) {
            console.error("No stratoArtifact found in the prompt");
            return [];
        }
        
        const artifactContent = artifactMatch[0];
        
       
        const actionRegex = /<stratoAction type="file" filePath="([^"]+)">([\s\S]*?)<\/stratoAction>/g;
        let match;
        let id = 1;
        
        while ((match = actionRegex.exec(artifactContent)) !== null) {
            const filePath = match[1];
            const content = match[2];
            
            
            const lastSegment = filePath.split('/').pop() 
            const isFile = lastSegment?.includes('.')
            let type = isFile ? StepType.CreateFile : StepType.CreateFolder
          
            steps.push({
                id,
                title: `Create ${filePath}`,
                content,
                type,
                status: Status.Pending,
                filePath
            });
            
            id++;
        }

        return steps;
    } catch (error) {
        console.error("Error parsing project structure:", error);
        return [];
    }
}
