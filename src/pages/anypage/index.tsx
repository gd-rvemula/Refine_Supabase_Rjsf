import  anyPageRenderer from './anyPageRenderer';



export interface AnyPageRendererProps {
   
    pageName: string;

  }

export const AnyPageRenderer: React.FC<AnyPageRendererProps> = ({ pageName }) => {
    
    return (
        
        anyPageRenderer({ pageName})
    );
}
export default AnyPageRenderer;


export interface AnyPageProviderPropsEvent {
   
    pageName: string;
  }

