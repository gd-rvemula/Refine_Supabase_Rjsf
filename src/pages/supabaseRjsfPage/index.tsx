import  supabaseRjsfPageRenderer from './supabaseRjsfPageRenderer';



export interface SupabaseRjsfPageRendererProps {
   
    pageName: string;

  }

export const SupabaseRjsfPageRenderer: React.FC<SupabaseRjsfPageRendererProps> = ({ pageName }) => {
    
    return (
        
      supabaseRjsfPageRenderer({ pageName})
    );
}
export default SupabaseRjsfPageRenderer;


export interface SupabaseRjsfPageProviderPropsEvent {
   
    pageName: string;
  }

