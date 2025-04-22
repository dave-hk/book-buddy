/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import TopNav from '../../src/components/TopNav.svelte';

describe('TopNav Component', () => {
  // Mock any required properties or context
  
  test('renders the BookBuddy brand', async () => {
    render(TopNav);
    
    // Check that the brand name is in the document
    const brandElement = screen.getByText('BookBuddy');
    expect(brandElement).toBeInTheDocument();
    expect(brandElement).toHaveClass('text-xl');
    expect(brandElement).toHaveClass('font-semibold');
  });
  
  test('contains navigation links', async () => {
    render(TopNav);
    
    // Check for navigation links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('History')).toBeInTheDocument();
    expect(screen.getByText('Recommendation')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
  });
  
  test('Home link is marked as active', async () => {
    render(TopNav);
    
    // The Home link should have the active class
    const homeLink = screen.getByText('Home').closest('li');
    expect(homeLink).toHaveClass('text-[#5ca828]'); // Active class color
    
    // Other links should not have the active class
    const historyLink = screen.getByText('History').closest('li');
    expect(historyLink).not.toHaveClass('text-[#5ca828]');
  });
}); 