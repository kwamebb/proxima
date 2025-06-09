# Proxima Development Guide

You are claude code, an agentic coding tool tasked to help improve productivity on my project Proxima. Proxima is a medical startup designed for both enterprise and consumer uses. In essence the startup leverages AI capabilities to create a preliminary diagnostic tool for both consumer and enterprise.

## Project Overview
We are developing a symptom analysis platform that leverages BioDigital's interactive 3D anatomy visualization. In our model, users directly select affected body regions, upon which they are prompted with targeted medical forms to describe their symptoms and what they are experiencing.

Currently, most AI-powered health analysis applications employ a chatbot interface where users input general feelings and receive potential prognoses. We believe BioDigital's 3D model interface allows not only for a more interactive and engaging user experience, but also enables more accurate symptom assessment due to the added context from the body location selected, combined with the structure added from our targeted forms.

We plan to target both consumer and enterprise applications. On the consumer side, users can independently interact with the 3D model and input symptoms without requiring a doctor visit. For enterprise use, our platform would be deployed to doctors' offices both in-person and remotely, providing more clinical specificity to the often vague responses patients input to doctor created forms.

Proxima has additional AI capabilities to aggregate doctor created forms without anatomical models and translate the information into medical terminology for examination before visits. Even more information on proxima can be found on our corporate/marketing page if curious as well or if you need to glean additional info when creating a component or part.

## Technical Architecture & Setup

### Tech Stack
- **Framework**: Solito monorepo structure (React Native + Next.js)
- **Package Manager**: yarn (required), node.js (fallback only if necessary)
- **Platforms**: React Native for mobile, Next.js for web, some web components use React native web as well but next.js is preffered
- **3D Integration**: BioDigital interactive anatomy models
- **Language**: TypeScript preferred for all new code

## Development Workflow & Guidelines

When interacting with our codebase there are several important things to remember:

1. **Monorepo Compatibility**: This is a monorepo created with the solito structure - ensure all dependencies, components and libraries added are compatible with this. Solito allows React as well - additional web-only components not connected to an already created react native web area of production should be built in React in the next.js part of our repository.

2. **Package Management**: Our project uses yarn and it is preferable to add new libraries with yarn. If this is not possible node.js is permissible as well.

3. **Clarification Protocol**: After every task I assign to you, be sure to ask any follow up questions for further clarification on any confusing elements or parts that may be vague/want to understand to an area of detail. Questions should be designed thoughtfully and in a way that targets gaps in knowledge, creates an increase in general detail, and clarifies any missing points to the best possible ability. If you have good understanding of the task already and questions are unnecessary there is no need to ask and it is preferred not to.

4. **Task Approval Process**: For any reasonably complex task please summarize the points and tasks for you to do back to me for approval. I may strike down, correct, or modify certain aspects of your summary so this is very helpful for me to gain insights into your missions. If tasks are easy or on the clarification I gave you approval or very minimal modifications you can proceed without asking/reasking. Otherwise ask until approved.

5. **React Native Reanimated**: There is rarely a dependent issue with the react native reanimated library try to make sure this doesn't pop up without modifying things in the mission of the task.

6. **Error Prevention & Resolution**: Although it is rare, sometimes after modifying components you create 500 internal server errors or error content not found because what you did interfered in a way that created problems. When completing the tasks try to fix these errors if they come up or design solutions in a way that ensures they are avoided all the while not compromising my original mission of the task at all.

## Enhanced Development Practices

### Code Quality Standards
- Consider/ensure cross-platform compatibility for shared components

### Git Workflow
- Create descriptive commit messages, especially for medical/diagnostic features
- Use feature branches for new functionality
- Test on both web and mobile platforms before merging

### Common Issues to Avoid
- **React Native Reanimated conflicts** - Check compatibility before adding animations
- **Solito incompatibility** - Verify all new dependencies work with our monorepo structure
- **Platform-specific imports** - Keep web-only code in Next.js, shared code in packages
- **500 internal server errors** - Usually from incorrect component imports or routing
- **Content not found errors** - Often from mismatched file paths in monorepo structure
- **Cross-platform styling** - Test components on both web and mobile interfaces

### Advanced Workflow Features

#### Thinking Modes for Complex Tasks
When working on challenging problems, use these thinking modes:
- `think` - Basic problem analysis
- `think hard` - Medical logic and cross-platform considerations
- `think harder` - Complex diagnostic algorithm changes
- `ultrathink` - Major architectural decisions affecting both platforms

#### Medical Context Considerations
- Enterprise features must work for both in-person and remote doctor consultations
- Consumer features should be accessible to non-medical users
- Diagnostic accuracy is critical - verify medical logic thoroughly
- 3D anatomy selections must map correctly to medical terminology
- Form validation should catch common user input errors

#### Testing Strategy
- Test medical form validations across different scenarios
- Verify 3D model interactions work on various screen sizes
- Check enterprise vs consumer feature flags function correctly
- Validate diagnostic logic with edge cases
- Ensure accessibility standards for medical applications

#### Performance Optimization
- Monitor bundle sizes for both web and mobile
- Optimize 3D model loading and rendering
- Ensure diagnostic algorithms don't block UI interactions
- Cache medical terminology and form templates appropriately

## Additional Resources
- Corporate/marketing page contains additional context about Proxima's mission
- BioDigital documentation for 3D model integration updates
- Internal medical terminology guidelines (ask if needed)
- HIPAA compliance documentation for enterprise features