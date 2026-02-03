<script lang="ts">
  import { onMount } from 'svelte';

  interface TeamMember {
    id: string;
    name: string;
    role: string;
  }

  interface MilestoneItem {
    id: string;
    month: string;
    title: string;
    status: 'clear' | 'green' | 'yellow' | 'red';
    cardCount: number;
  }

  interface Milestone {
    id: string;
    title: string;
    items: MilestoneItem[];
  }

  interface ValueItem {
    id: string;
    label: string;
    value: string;
  }

  let projectTitle = 'BIG IMPORTANT PROJECT FOCUSED ON WORK';
  let vision = 'One sentence vision statement.';
  let currentState = 'Next-generation heavy-lift rocket capable of delivering crew and cargo...';
  let idealState = 'Next-generation heavy-lift rocket capable of delivering crew and cargo...';

  let valueItems: ValueItem[] = [
    { id: '1', label: 'SPONSOR', value: 'One sentence objective.' },
    { id: '2', label: 'IMPACT', value: 'One sentence objective.' },
    { id: '3', label: 'LEVEL OF EFFORT', value: 'One sentence objective.' },
    { id: '4', label: 'CONFIDENCE', value: 'One sentence objective.' }
  ];

  let projectLeads: TeamMember[] = [
    { id: '1', name: 'Melissa Hargrove', role: 'Director, Advanced Propulsion Systems' },
    { id: '2', name: 'Allen Reyes', role: 'Chief Aerospace Engineer' },
    { id: '3', name: 'Naomi Li', role: 'Program Manager, Artemis Integration Office' }
  ];

  let stakeholders: TeamMember[] = [
    { id: '1', name: 'Melissa Hargrove', role: '' },
    { id: '2', name: 'NEW STAKEHOLDER', role: '' },
    { id: '3', name: 'NEW STAKEHOLDER', role: '' }
  ];

  let milestones: Milestone[] = [
    {
      id: '1',
      title: '25Q1: Finalization of rocket specifications',
      items: [
        {
          id: '1',
          month: 'Jan',
          title: '1.1 Requirements gathering from mission architecture',
          status: 'clear',
          cardCount: 0
        }
      ]
    }
  ];

  let dropdownOpen: Record<string, boolean> = {};
  let collapsedCards: Record<string, boolean> = {};
  let activeTab = 'project';

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const statusOptions = [
    { value: 'clear', label: 'Not Started', color: '#9ca3af' },
    { value: 'green', label: 'Done', color: '#10b981' },
    { value: 'yellow', label: 'In Progress', color: '#f59e0b' },
    { value: 'red', label: 'Blocked', color: '#ef4444' }
  ];

  function addValueItem() {
    const newId = (Math.max(...valueItems.map(v => parseInt(v.id)), 0) + 1).toString();
    valueItems = [...valueItems, { id: newId, label: 'NEW ITEM', value: '' }];
  }

  function deleteValueItem(id: string) {
    valueItems = valueItems.filter(v => v.id !== id);
  }

  function addProjectLead() {
    const newId = (Math.max(...projectLeads.map(m => parseInt(m.id)), 0) + 1).toString();
    projectLeads = [...projectLeads, { id: newId, name: 'New Team Member', role: 'Enter role here' }];
  }

  function deleteProjectLead(id: string) {
    projectLeads = projectLeads.filter(m => m.id !== id);
  }

  function addStakeholder() {
    const newId = (Math.max(...stakeholders.map(s => parseInt(s.id)), 0) + 1).toString();
    stakeholders = [...stakeholders, { id: newId, name: 'NEW STAKEHOLDER', role: '' }];
  }

  function deleteStakeholder(id: string) {
    stakeholders = stakeholders.filter(s => s.id !== id);
  }

  function addMilestone() {
    const newId = (Math.max(...milestones.map(m => parseInt(m.id)), 0) + 1).toString();
    milestones = [...milestones, { id: newId, title: 'New Milestone Title', items: [] }];
  }

  function deleteMilestone(id: string) {
    milestones = milestones.filter(m => m.id !== id);
  }

  function addMilestoneItem(milestoneId: string) {
    const milestone = milestones.find(m => m.id === milestoneId);
    if (milestone) {
      const newId = (Math.max(...milestone.items.map(i => parseInt(i.id)), 0) + 1).toString();
      milestone.items = [
        ...milestone.items,
        { id: newId, month: 'Jan', title: 'New Checkpoint', status: 'clear', cardCount: 0 }
      ];
      milestones = milestones;
    }
  }

  function deleteMilestoneItem(milestoneId: string, itemId: string) {
    const milestone = milestones.find(m => m.id === milestoneId);
    if (milestone) {
      milestone.items = milestone.items.filter(i => i.id !== itemId);
      milestones = milestones;
    }
  }

  function updateMilestoneItemStatus(milestoneId: string, itemId: string, status: string) {
    const milestone = milestones.find(m => m.id === milestoneId);
    if (milestone) {
      const item = milestone.items.find(i => i.id === itemId);
      if (item) {
        item.status = status as any;
        milestones = milestones;
      }
    }
  }

  function toggleDropdown(id: string) {
    dropdownOpen[id] = !dropdownOpen[id];
  }

  function getStatusColor(status: string) {
    const option = statusOptions.find(o => o.value === status);
    return option?.color || '#9ca3af';
  }

  function getStatusLabel(status: string) {
    const option = statusOptions.find(o => o.value === status);
    return option?.label || 'Not Started';
  }
</script>

<svelte:head>
  <title>Project Planner</title>
  <meta name="description" content="Project planning and management tool" />
</svelte:head>

<div class="container">
  <!-- Banner -->
  <div class="banner">Project Plan V1</div>

  <!-- Navigation Tabs -->
  <div class="tab-buttons">
    <button class="tab-btn" class:active={activeTab === 'project'} on:click={() => (activeTab = 'project')}>
      Select Project
    </button>
    <button class="tab-btn" class:active={activeTab === 'all'} on:click={() => (activeTab = 'all')}>
      All Projects
    </button>
    <button class="tab-btn" class:active={activeTab === 'roadmap'} on:click={() => (activeTab = 'roadmap')}>
      Roadmap
    </button>
  </div>

  <!-- Main Content -->
  <div class="content-wrapper">
    <!-- Left Column -->
    <div class="grid-left">
      <!-- Project Overview Card -->
      <div class="card">
        <div class="project-title" contenteditable="true">{projectTitle}</div>

        <div class="status-item">
          <div class="status-label">VISION:</div>
          <div class="status-text" contenteditable="true">{vision}</div>
        </div>

        <div class="status-item">
          <div class="status-label">CURRENT STATE:</div>
          <div class="status-text" contenteditable="true">{currentState}</div>
        </div>

        <div class="status-item">
          <div class="status-label">IDEAL FUTURE STATE:</div>
          <div class="status-text" contenteditable="true">{idealState}</div>
        </div>

        <div class="status-label">VALUE OPPORTUNITY:</div>
        <div class="value-section">
          {#each valueItems as item (item.id)}
            <div class="value-item">
              <span class="value-label">{item.label}:</span>
              <span class="value-text" contenteditable="true">{item.value}</span>
              <button class="delete-btn" on:click={() => deleteValueItem(item.id)}>×</button>
            </div>
          {/each}
        </div>
        <button class="add-button" on:click={addValueItem}>+ Add Value</button>
      </div>

      <!-- Milestones Card -->
      <div class="card">
        <div class="section-title">KEY MILESTONES:</div>
        {#each milestones as milestone (milestone.id)}
          <div class="milestone-box">
            <div class="milestone-header">
              <div class="milestone-title" contenteditable="true">{milestone.title}</div>
              <button class="delete-btn" on:click={() => deleteMilestone(milestone.id)}>×</button>
            </div>
            <div class="milestone-toolbar">
              <span>🏆 <span class="count">{milestone.items.length}</span></span>
              <span>📢 <span class="count">28</span></span>
              <span>💬 <span class="count">0</span></span>
            </div>
            <div class="milestone-items">
              {#each milestone.items as item (item.id)}
                <div class="milestone-item">
                  <div class="status-dropdown">
                    <button
                      class="status-button"
                      style="background-color: {getStatusColor(item.status)}"
                      on:click={() => toggleDropdown(`${milestone.id}-${item.id}`)}
                    >
                      {getStatusLabel(item.status)}
                    </button>
                    {#if dropdownOpen[`${milestone.id}-${item.id}`]}
                      <div class="dropdown-menu">
                        {#each statusOptions as option}
                          <div
                            class="dropdown-option"
                            on:click={() => {
                              updateMilestoneItemStatus(milestone.id, item.id, option.value);
                              toggleDropdown(`${milestone.id}-${item.id}`);
                            }}
                          >
                            <div class="color-dot" style="background-color: {option.color}"></div>
                            {option.label}
                          </div>
                        {/each}
                      </div>
                    {/if}
                  </div>

                  <select bind:value={item.month} class="month-select">
                    {#each months as month}
                      <option value={month}>{month}</option>
                    {/each}
                  </select>

                  <span class="sep">:</span>

                  <span class="milestone-text" contenteditable="true">{item.title}</span>

                  <div class="milestone-meta">
                    🗂️ <span class="count">{item.cardCount}</span>
                    <button on:click={() => (item.cardCount++)}>+</button>
                  </div>

                  <button class="delete-btn" on:click={() => deleteMilestoneItem(milestone.id, item.id)}>×</button>
                </div>
              {/each}
            </div>
            <button class="add-button" on:click={() => addMilestoneItem(milestone.id)}>+ Add Checkpoint</button>
          </div>
        {/each}
        <button class="add-button" on:click={addMilestone}>+ Add Milestone</button>
      </div>
    </div>

    <!-- Right Column -->
    <div class="grid-right">
      <!-- Project Leads Card -->
      <div class="card">
        <div class="section-title">PROJECT LEADS:</div>
        <div class="member-list">
          {#each projectLeads as lead (lead.id)}
            <div class="team-member">
              <div>
                <div class="member-name" contenteditable="true">{lead.name}</div>
                <div class="member-role" contenteditable="true">{lead.role}</div>
              </div>
              <button class="delete-btn" on:click={() => deleteProjectLead(lead.id)}>×</button>
            </div>
          {/each}
        </div>
        <button class="add-button" on:click={addProjectLead}>+ Add Lead</button>
      </div>

      <!-- Stakeholders Card -->
      <div class="card">
        <div class="section-title">STAKEHOLDERS:</div>
        <div class="member-list">
          {#each stakeholders as stakeholder (stakeholder.id)}
            <div class="stakeholder-item">
              <div class="stakeholder-name" contenteditable="true">{stakeholder.name}</div>
              <button class="delete-btn" on:click={() => deleteStakeholder(stakeholder.id)}>×</button>
            </div>
          {/each}
        </div>
        <button class="add-button" on:click={addStakeholder}>+ Add Stakeholder</button>
      </div>
    </div>
  </div>
</div>

<style>
  :global(body) {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
    color: #2d3748;
    line-height: 1.5;
    font-size: 14px;
  }

  .container {
    width: 100%;
  }

  .banner {
    background-color: #d7f73b;
    padding: 8px 16px;
    font-weight: 700;
    text-align: right;
    font-size: 14px;
  }

  .tab-buttons {
    display: flex;
    gap: 8px;
    padding: 12px 16px;
    background: #ffffff;
    border-bottom: 1px solid #e1e5e9;
    flex-wrap: wrap;
  }

  .tab-btn {
    padding: 6px 12px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    background: #ffffff;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    color: #6b7280;
    transition: all 0.2s ease;
    text-transform: uppercase;
  }

  .tab-btn:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }

  .tab-btn.active {
    background: #f3f4f6;
    border-color: #6b7280;
    color: #374151;
  }

  .content-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    padding: 20px;
    max-width: 1400px;
    margin: 0 auto;
  }

  .grid-left {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .grid-right {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .card {
    background: #ffffff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    border: 1px solid #e1e5e9;
  }

  .project-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #1f2937;
    outline: none;
    padding: 4px;
    border-radius: 4px;
  }

  .project-title:focus {
    background-color: #f3f4f6;
    outline: 2px solid #3b82f6;
  }

  .section-title {
    font-weight: 700;
    color: #1f2937;
    font-size: 13px;
    text-transform: uppercase;
    margin-bottom: 12px;
    letter-spacing: 0.5px;
  }

  .status-item {
    margin-bottom: 14px;
  }

  .status-label {
    font-weight: 700;
    color: #4c4a4a;
    margin-bottom: 4px;
    margin-top: 6px;
    font-size: 13px;
    text-transform: uppercase;
  }

  .status-text {
    color: #4a5568;
    line-height: 1.5;
    font-size: 12px;
    padding: 4px;
    border-radius: 4px;
    outline: none;
  }

  .status-text:focus {
    background-color: #f3f4f6;
    outline: 2px solid #3b82f6;
  }

  .value-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
  }

  .value-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    background: #f9f9f9;
    border-radius: 4px;
    border: 1px solid #e5e7eb;
    position: relative;
  }

  .value-label {
    font-weight: 700;
    color: #4c4a4a;
    font-size: 12px;
    white-space: nowrap;
  }

  .value-text {
    flex: 1;
    outline: none;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
    color: #4a5568;
  }

  .value-text:focus {
    background-color: #fafafa;
    outline: 1px dashed #3b82f6;
  }

  .add-button {
    background: #f3f4f6;
    border: 1px solid #d1d5db;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    margin-top: 10px;
    transition: all 0.2s ease;
  }

  .add-button:hover {
    background: #e5e7eb;
    border-color: #9ca3af;
  }

  .milestone-box {
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 12px;
    background: #f9f9f9;
    position: relative;
  }

  .milestone-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .milestone-title {
    font-weight: 700;
    font-size: 13px;
    color: #1f2937;
    flex: 1;
    outline: none;
    padding: 2px 4px;
    border-radius: 3px;
  }

  .milestone-title:focus {
    background-color: #f0f0f0;
    outline: 1px dashed #3b82f6;
  }

  .milestone-toolbar {
    display: flex;
    gap: 16px;
    margin-bottom: 8px;
    font-size: 12px;
    color: #6b7280;
  }

  .milestone-toolbar .count {
    font-weight: 700;
    color: #1f2937;
  }

  .milestone-items {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .milestone-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #e5e7eb;
  }

  .status-dropdown {
    position: relative;
  }

  .status-button {
    padding: 4px 8px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    background: #f3f4f6;
    cursor: pointer;
    font-size: 11px;
    font-weight: 600;
    color: white;
    white-space: nowrap;
    transition: all 0.2s ease;
  }

  .status-button:hover {
    opacity: 0.8;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
    min-width: 120px;
  }

  .dropdown-option {
    padding: 8px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: #4a5568;
    transition: background-color 0.2s ease;
  }

  .dropdown-option:hover {
    background-color: #f3f4f6;
  }

  .color-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .month-select {
    padding: 4px 6px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    font-size: 12px;
    background: white;
    cursor: pointer;
  }

  .sep {
    color: #9ca3af;
  }

  .milestone-text {
    flex: 1;
    outline: none;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
    color: #4a5568;
  }

  .milestone-text:focus {
    background-color: #f9fafb;
    outline: 1px dashed #3b82f6;
  }

  .milestone-meta {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: #6b7280;
  }

  .milestone-meta .count {
    font-weight: 700;
  }

  .milestone-meta button {
    padding: 2px 6px;
    border: 1px solid #d1d5db;
    border-radius: 3px;
    background: white;
    cursor: pointer;
    font-size: 10px;
    transition: all 0.2s ease;
  }

  .milestone-meta button:hover {
    background: #f3f4f6;
  }

  .member-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .team-member {
    padding: 8px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .member-name {
    font-weight: 700;
    font-size: 12px;
    color: #1f2937;
    outline: none;
    padding: 2px;
    border-radius: 2px;
  }

  .member-name:focus {
    background-color: #f3f4f6;
    outline: 1px dashed #3b82f6;
  }

  .member-role {
    font-size: 11px;
    color: #6b7280;
    outline: none;
    padding: 2px;
    border-radius: 2px;
  }

  .member-role:focus {
    background-color: #f3f4f6;
    outline: 1px dashed #3b82f6;
  }

  .stakeholder-item {
    padding: 8px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: #4a5568;
  }

  .stakeholder-name {
    flex: 1;
    outline: none;
    padding: 2px;
    border-radius: 2px;
  }

  .stakeholder-name:focus {
    background-color: #f3f4f6;
    outline: 1px dashed #3b82f6;
  }

  .delete-btn {
    background: transparent;
    border: none;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    color: #6b7280;
    padding: 4px 8px;
    transition: color 0.2s ease;
  }

  .delete-btn:hover {
    color: #ef4444;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .content-wrapper {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .tab-buttons {
      gap: 4px;
    }

    .tab-btn {
      padding: 4px 8px;
      font-size: 11px;
    }

    .content-wrapper {
      padding: 12px;
      gap: 12px;
    }

    .card {
      padding: 12px;
    }

    .milestone-item {
      flex-wrap: wrap;
      gap: 4px;
    }
  }
</style>
