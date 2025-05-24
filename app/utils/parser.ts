import { StepType, Status, Steps } from '../../types/stepsType';

export function parser(prompt: string): Steps[] {
    // Initialize empty steps array
    const steps: Steps[] = [];
    
    try {
        // Extract the stratoArtifact content
        const artifactMatch = prompt.match(/<stratoArtifact[^>]*>([\s\S]*?)<\/stratoArtifact>/);
        
        if (!artifactMatch) {
            console.error("No stratoArtifact found in the prompt");
            return [];
        }
        
        const artifactContent = artifactMatch[0];
        
        // Extract all stratoAction blocks
        const actionRegex = /<stratoAction type="file" filePath="([^"]+)">([\s\S]*?)<\/stratoAction>/g;
        let match;
        let id = 1;
        
        while ((match = actionRegex.exec(artifactContent)) !== null) {
            const filePath = match[1];
            const content = match[2];
            
            // Determine step type based on the file path
            // For this implementation, we'll assume all are CreateFile
            const type = StepType.CreateFile;
            
            // Create a step object for each file
            steps.push({
                id,
                title: `Create ${filePath}`,
                content,
                type,
                status: Status.Pending
            });
            
            id++;
        }

        return steps;
    } catch (error) {
        console.error("Error parsing project structure:", error);
        return [];
    }
}

/**
 * Example usage:
 * 
 * // Import the parser
 * import { parser } from './parser';
 * 
 * // Use it to parse a prompt string
 * const projectSteps = parser(myPromptString);
 * 
 * // The result will be an array of Steps objects
 * console.log(projectSteps);
 */