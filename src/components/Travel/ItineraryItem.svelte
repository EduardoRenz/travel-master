<script lang="ts">
  import type { Activity } from "../../domain/Activity"
  import { DateServiceFactory } from "../../services/date/DateService"
  import Weather from "./Weather.svelte"
  export let item: Activity
  export let firstDay: Date

  const dateService = DateServiceFactory.getInstance()
</script>

<li>
  <div
    class="timeline-item"
    on:click
    on:keydown={(e) => {
      if (e.key === "Enter" && e.target instanceof HTMLElement) {
        e.target.click()
      }
    }}
    tabindex="0"
    role="button"
  >
    <div class="timeline-badge">{item.getDayFromFirstDay(firstDay)}</div>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <Weather location={item.address} date={item.date} />
        <h4>{dateService.formatDateToLongDayMonth(item.date)}</h4>
        <h5>{item.address}</h5>
      </div>
      <div class="timeline-body">
        <p>{item.description}</p>
      </div>
    </div>
  </div>
</li>

<style>
  li {
    margin-bottom: var(--spacing-lg);
    position: relative;
  }

  .timeline-item {
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .timeline-badge {
    color: var(--color-text-light);
    width: 25px;
    height: 25px;
    line-height: 25px;
    font-size: var(--font-size-sm);
    text-align: center;
    position: absolute;
    top: 0;
    left: calc(-1 * (var(--spacing-lg) + 13px));
    background-color: var(--color-primary);
    border-radius: 50%;
    z-index: 2;
  }

  .timeline-panel {
    padding: var(--spacing-sm);
    background-color: var(--color-background);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--box-shadow-default);
  }

  .timeline-heading {
    position: relative;
  }

  .timeline-heading h4 {
    margin-top: 0;
    padding-right: 60px;
    color: var(--color-primary);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
  }

  .timeline-heading h5 {
    margin-top: var(--spacing-xs);
    color: var(--color-text-secondary);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-normal);
  }

  .timeline-body p {
    margin-bottom: 0;
    color: var(--color-text-primary);
    font-size: var(--font-size-base);
  }

  .timeline-item:hover .timeline-panel {
    background-color: var(--color-background-hover, #e8e8e8);
  }
</style>
