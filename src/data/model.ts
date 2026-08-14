/**
 * Detector evaluation numbers for the FRCMOB case study.
 *
 * Source: the project's own training artifacts.
 *   media/models/frc_robot_detector_v1_a100_results.csv  (80-epoch run)
 *   media/models/frc_robot_detector_v2_result.json       (fine-tune result)
 *
 * The distinction that matters: v1's headline number is validation on data
 * drawn from the same pool it trained on. v2's headline number is a held-out
 * event the model never saw. They are not comparable, and the page says so.
 */

export const detector = {
  classes: 1,
  className: "robot",
  base: "YOLO11",
  trainImages: 6540,
  reviewedImages: 1683,
  holdoutImages: 224,
  holdoutEvent: "Einstein 2026",
  v1: {
    label: "v1",
    epochs: 80,
    hardware: "A100",
    imgsz: 640,
    // Same-distribution validation split.
    precision: 0.973,
    recall: 0.955,
    map50: 0.980,
    map5095: 0.885,
  },
  v2: {
    label: "v2",
    note: "Low-learning-rate fine-tune from v1 on a mixed reviewed dataset.",
    // Held-out event, never seen during training.
    precision: 0.924,
    recall: 0.586,
    map50: 0.717,
    map5095: 0.512,
  },
  /** v1's score on the same locked holdout. This is the bar v2 had to clear. */
  v1HoldoutMap50: 0.699,
} as const;

export const pct = (n: number) => `${(n * 100).toFixed(1)}%`;
