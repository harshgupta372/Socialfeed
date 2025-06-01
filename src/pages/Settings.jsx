import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import styled from 'styled-components'

const SettingsContainer = styled.div`
  padding: var(--space-3);
  max-width: 600px;
  margin: 0 auto;
  
  h2 {
    font-size: var(--fs-2xl);
    font-weight: 700;
    margin-bottom: var(--space-3);
  }
`

const SettingsSection = styled.section`
  background-color: ${props => props.$theme === 'dark' ? 'var(--bg-secondary-dark)' : 'var(--bg-secondary-light)'};
  border-radius: var(--radius-lg);
  padding: var(--space-3);
  margin-bottom: var(--space-3);
  box-shadow: 0 2px 4px ${props => props.$theme === 'dark' ? 'var(--card-shadow-dark)' : 'var(--card-shadow-light)'};
  
  h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-2);
    font-weight: 600;
  }
`

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) 0;
  border-bottom: 1px solid ${props => props.$theme === 'dark' ? 'var(--border-dark)' : 'var(--border-light)'};
  
  &:last-child {
    border-bottom: none;
  }
  
  label {
    font-weight: 500;
  }
  
  p {
    font-size: var(--fs-sm);
    color: ${props => props.$theme === 'dark' ? 'var(--text-secondary-dark)' : 'var(--text-secondary-light)'};
    margin-top: 4px;
  }
`

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.$checked ? 'var(--accent-light)' : props.$theme === 'dark' ? 'var(--border-dark)' : 'var(--border-light)'};
    transition: 0.3s;
    border-radius: 34px;
    
    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: 0.3s;
      border-radius: 50%;
      transform: ${props => props.$checked ? 'translateX(24px)' : 'translateX(0)'};
    }
  }
`

const Button = styled.button`
  background-color: ${props => props.$primary ? 'var(--accent-light)' : 'transparent'};
  color: ${props => props.$primary ? 'white' : props.$theme === 'dark' ? 'var(--text-primary-dark)' : 'var(--text-primary-light)'};
  border: 1px solid ${props => props.$primary ? 'var(--accent-light)' : props.$theme === 'dark' ? 'var(--border-dark)' : 'var(--border-light)'};
  border-radius: var(--radius-md);
  padding: var(--space-1) var(--space-3);
  font-weight: 500;
  
  &:hover {
    background-color: ${props => props.$primary ? '#0070e0' : props.$theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }
`

function Settings() {
  const { theme, toggleTheme } = useTheme()
  const [autoRefresh, setAutoRefresh] = useState(true)
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  
  return (
    <SettingsContainer>
      <h2>Settings</h2>
      
      <SettingsSection $theme={theme}>
        <h3>Appearance</h3>
        <SettingItem $theme={theme}>
          <div>
            <label>Dark Mode</label>
            <p>Switch between light and dark theme</p>
          </div>
          <Switch $checked={theme === 'dark'} $theme={theme}>
            <input 
              type="checkbox" 
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <span></span>
          </Switch>
        </SettingItem>
      </SettingsSection>
      
      <SettingsSection $theme={theme}>
        <h3>Feed Preferences</h3>
        <SettingItem $theme={theme}>
          <div>
            <label>Auto-refresh Feed</label>
            <p>Automatically refresh feed every 5 minutes</p>
          </div>
          <Switch $checked={autoRefresh} $theme={theme}>
            <input 
              type="checkbox" 
              checked={autoRefresh}
              onChange={() => setAutoRefresh(!autoRefresh)}
            />
            <span></span>
          </Switch>
        </SettingItem>
      </SettingsSection>
      
      <SettingsSection $theme={theme}>
        <h3>Notifications</h3>
        <SettingItem $theme={theme}>
          <div>
            <label>Enable Notifications</label>
            <p>Get notified about new posts</p>
          </div>
          <Switch $checked={notificationsEnabled} $theme={theme}>
            <input 
              type="checkbox" 
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            />
            <span></span>
          </Switch>
        </SettingItem>
      </SettingsSection>
      
      <SettingsSection $theme={theme}>
        <h3>Account</h3>
        <SettingItem $theme={theme}>
          <div>
            <label>Clear Data</label>
            <p>Remove all saved bookmarks and preferences</p>
          </div>
          <Button $theme={theme}>Clear Data</Button>
        </SettingItem>
      </SettingsSection>
    </SettingsContainer>
  )
}

export default Settings