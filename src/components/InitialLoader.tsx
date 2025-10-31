import React from 'react';
import {
  LoaderContainer,
  LoaderContent,
  Logo,
  Tagline,
  SpinnerContainer,
  Spinner,
  ProgressSection,
  ProgressBarContainer,
  ProgressBar,
  ProgressText,
  LoadingText
} from '../styles/components/InitialLoaderStyles';

interface InitialLoaderProps {
  progress: number;
}

const InitialLoader: React.FC<InitialLoaderProps> = ({ progress }) => {
  const isComplete = progress >= 100;

  // Dynamic loading messages based on progress
  const getLoadingMessage = () => {
    if (progress < 20) return 'Initializing copywriting courses platform...';
    if (progress < 40) return 'Loading course materials and resources...';
    if (progress < 60) return 'Preparing your interactive learning environment...';
    if (progress < 80) return 'Setting up your personalized dashboard...';
    if (progress < 95) return 'Almost ready to start your copywriting journey...';
    return 'Welcome to your copywriting education platform!';
  };

  return (
    <LoaderContainer $isComplete={isComplete}>
      <LoaderContent>
        <Logo>COPYWRITING COURSES</Logo>
        <Tagline>Master the Art of Persuasive Writing</Tagline>
        
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
        
        <ProgressSection>
          <ProgressBarContainer>
            <ProgressBar $progress={progress} />
          </ProgressBarContainer>
          <ProgressText>{Math.round(progress)}%</ProgressText>
        </ProgressSection>
        
        <LoadingText>
          {getLoadingMessage()}
        </LoadingText>
      </LoaderContent>
    </LoaderContainer>
  );
};

export default InitialLoader;