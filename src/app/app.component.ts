import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MaterialModule } from './shared/material.module';

/**
 * Root Application Component
 * 
 * Serves as the main container for the application.
 * Provides the primary layout with header, content area, and footer.
 * Includes navigation using Angular's router.
 * 
 * This component:
 * - Defines the global application layout
 * - Sets up the navigation structure
 * - Serves as the mount point for route-based components
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MaterialModule],
  standalone: true
})
export class AppComponent {
  /** Application title */
  title = 'HRnet Employee Management';
}
